import { Component, Vue, Prop } from 'vue-property-decorator'
import { bus, SymbolChangeEvent, TradeLogFocusEvent } from "@/utils/bus";
import { TradeApi } from "@/api/TradeApi";

import { datatype, st } from "@/proto/proto";
import {
  tradeLogTypeMap,
  tradeSubStateMap,
  tradeLogTypeSelect,
  tradeSubStateSelect,
} from "./Global";
//import { RowProps, ElTableColumn, ElRow } from "element-plus";

@Component({
  name: "ActionTable"
})
export default class extends Vue {
  @Prop({ default: 'xxxxx' }) private name!: String
  private tableData : datatype.QueryTradeLogResp = datatype.QueryTradeLogResp.create()
  private api: TradeApi = new TradeApi("http://localhost:8888/v1", this.axios)
  private logTypeSelect: any = tradeLogTypeSelect
  private tradeSubStateSelect: any = tradeSubStateSelect
  private curSymbol: string = ""
  private currentPage: number = 1
  private stillInQueryTableData: boolean = false

  private pageSize: number = 5
  private pagerCount: number = 5
  private pageSizes: Array<number> = [5, 10, 20]
  private perQueryLimit: number = 6  // 需要大于每个页面数量，避免首次拉取刚好处于第一页，无法触发事件更新
  private moreDataQuerySecInterval: number = 10
  private maxQueryCountFirstLoaded: number = 400  // 首次加载表格时，最大异步拉取的数据量

  private moreInServer: boolean = true  // 是否有更多的数据在服务端
  private maxDataCountInServer: number = 0  // 服务端当前满足条件的数据量
  private lastUpdateSecTs: number = 0 // 上一次访问服务器时间
  private nextCursor: number = -1 // 上一次访问服务器的cursor
  data() {
    return {
      tableData: this.tableData,
      api: this.api,
      logTypeSelect: this.logTypeSelect,
      tradeSubStateSelect: this.tradeSubStateSelect,
      curSymbol: this.curSymbol,
      currentPage: this.currentChange,
      stillInQueryTableData: this.stillInQueryTableData,

      pageSize: this.pageSize,
      pagerCount: this.pagerCount,
      pageSizes: this.pageSize,
      perQueryLimit: this.perQueryLimit,  // 需要大于每个页面数量，避免首次拉取刚好处于第一页，无法触发事件更新
      moreDataQuerySecInterval: this.moreDataQuerySecInterval,
      maxQueryCountFirstLoaded: this.maxQueryCountFirstLoaded,  // 首次加载表格时，最大异步拉取的数据量

      moreInServer: this.moreInServer,  // 是否有更多的数据在服务端
      maxDataCountInServer: this.maxDataCountInServer,  // 服务端当前满足条件的数据量
      lastUpdateSecTs: this.lastUpdateSecTs, // 上一次访问服务器时间
      nextCursor: this.nextCursor, // 上一次访问服务器的cursor
    };
  }
  /*
  computed: {
    tradeDataLogs(): st.ITradeLog[] {
      return this.tableData.logs.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
    totalLogNum() {
      console.log("local_table_len:", this.tableData.logs.length, "|max_in_server_len=", this.maxDataCountInServer);
      return this.maxDataCountInServer;
    },
  },*/
  tableRowClassName({ row, rowIndex }: any): String {
    if (rowIndex === 1) {
      return "warning-row";
    } else if (rowIndex === 3) {
      return "success-row";
    }
    return "";
  }

  saveTableRecord(response: datatype.QueryTradeLogResp): void {
     console.log(`query_${this.curSymbol} tradelogs ok`, response);
     // TODO 改用插入排序
     this.tableData.logs = this.tableData.logs.concat(response.logs);
     this.moreInServer = response.more;
     this.nextCursor = response.nextCursor;
     this.lastUpdateSecTs = Date.now() / 1000.0;
     this.maxDataCountInServer = response.maxCanFound
  }
  async queryMoreRecord(): Promise<void> {
    let response = await this.api
      .QueryTradeLogs(this.curSymbol, this.nextCursor, this.perQueryLimit)
    this.saveTableRecord(response)
  }
  resetNavigationAndTable(): void {
    this.currentPage = 1;
    this.nextCursor = -1;
    this.moreInServer = true;
    this.lastUpdateSecTs = 0;
    this.maxDataCountInServer = 0;
    this.tableData = datatype.QueryTradeLogResp.create();
  }
  onSymbolChange(e: SymbolChangeEvent): void {
    console.log("tradelog_symbol_change|old_symbol=", this.curSymbol, "newSymbol=", e.symbol)
    this.curSymbol = e.symbol;
    this.resetNavigationAndTable();
    this.queryMoreRecord();
  }
  getLogTypeName(value: st.TradeLogType): string {
    if (value === undefined) {
      return "普通";
    }
    return tradeLogTypeMap[value];
  }
  getTradeStateName(value: st.TradeSubState): string {
    if (value === undefined) {
      return "无";
    }
    return tradeSubStateMap[value];
  }
  filterHandler(value: number, row: any, column: any): boolean {
    const property = column["property"];
    console.log(column, row[property], property, value);
    return value == row[property];
  }
  async currentChange(currentPage: number) {
    this.currentPage = currentPage;
    console.log("navigation_change|currentPage=", currentPage)
    if (this.shouldTryQueryMoreData()) {
      // 避免其他协程一起拉取数据
      if (this.stillInQueryTableData) {
        console.log("try_fetch|nextCursor=", this.nextCursor, "|currentPage=", currentPage, "giveUp")
        return
      }
      this.stillInQueryTableData = true;
    }
    // 页面变化时，若发现要展示更多页面，则需要阻塞拉取
    while (this.shouldTryQueryMoreData()) {
      console.log("try_fetch|nextCursor=", this.nextCursor, "|curPage=", currentPage)
      await this.queryMoreRecord();
    }
    this.stillInQueryTableData = false;
  }
  shouldTryQueryMoreData() : boolean {
    // 以当前分页，计算对应作为最大展示数量
    var maxCanShowNumber: number = this.currentPage * this.pageSize;
    // 若到当前分页，需要展示数量大于等于本地缓存的数据条数，且
    // 1.远端服务有更多
    // 2.本地缓存远端服务没有更多，但距离上一次刷新时间已经过去很长时间
    if (maxCanShowNumber >= this.tableData.logs.length) {
      var nowSecTs: number = Date.now() / 1000;
      if (
        this.moreInServer ||
        nowSecTs - this.lastUpdateSecTs > this.moreDataQuerySecInterval
      ) {
        return true;
      }
    }
    return false;
  }
  onTradeLogClick(row: datatype.TradeLogDo, event :any, col :any) {
    console.log("onclick", row.tsUsec)
    const e : TradeLogFocusEvent = {
      tsUsec : row.tsUsec,
    } 
    bus.emit('tradeLogFocus', e)
  }
  mounted() {
    console.log("table mounted");
    // 注册事件，监听展示图标变化时，显示不同的id
    bus.on("symbolChange", this.onSymbolChange);
  }
  setup(props: any, context: any) {
    console.log("table prop", props);
    return {};
  }
}
