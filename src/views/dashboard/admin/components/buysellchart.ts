import * as echarts from 'echarts'
import { Component, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import ResizeMixin from '@/components/Charts/mixins/resize'
import { innerapi, symbology } from '@/proto/proto'
import moment from 'moment'

const animationDuration = 600

@Component({
  name: 'BarChart'
})
export default class extends mixins(ResizeMixin) {
  @Prop({ default: 'chart' }) private className!: string
  @Prop({ default: '100%' }) private width!: string
  @Prop({ default: '600px' }) private height!: string
  private list : innerapi.IBuySellVolume[] = []
  private dataRange : Date[] = []
  private aggrIntervalSec = 600
  private curSymbolId = '6'
  private symbolOptions : symbology.ISymbolInfoPo[] = []
  private aggrIntervalSecOptions : any[] = []
  declare chart : echarts.EChartsType | null

  mounted() {
    this.$nextTick(() => {
      const lastDate : Date = new Date()
      lastDate.setDate(lastDate.getDate() - 1)
      console.log(lastDate.getFullYear)
      this.dataRange = [new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate(), 0, 0), new Date()]

      this.initSelectedList()
      this.initChart()
      this.fetchData()
    })
  }

  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  }

  initSelectedList() : void {
    this.symbolOptions = [
      symbology.SymbolInfoPo.create({
        symbolId: '6',
        innerSymbol: 'XRP-BYBIT'
      }),
      symbology.SymbolInfoPo.create({
        symbolId: '4',
        innerSymbol: 'XTC-BYBIT'
      }),
      symbology.SymbolInfoPo.create({
        symbolId: '7',
        innerSymbol: 'DOGE-BYBIT'
      }),
    ]
    this.aggrIntervalSecOptions = [
      {
        value: 600,
        label: '10m',
      },
      {
        value: 1800,
        label: '30m',
      },
      {
        value: 3600,
        label: '1h',
      },
      {
        value: 3600 * 4,
        label: '4h',
      },
    ]
  }

  async fetchData() : Promise<void> {
    const req = innerapi.GetBuySellVolumeReq.create({
      symbolId: this.curSymbolId,
      startSec: Math.floor(this.dataRange[0].getTime() / 1000),
      aggrIntervalSec: this.aggrIntervalSec,
    })
    const data : innerapi.IGetBuySellVolumeResp = await this.$innerService.GetBuySellVolume(req)
    console.log('fetch ok')
    this.list = data.statistics || []
    this.setOptions()
  }

  private setOptions() {
    this.list.forEach((x : innerapi.IBuySellVolume) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      x.startDate = moment(x.startSec as any * 1000).format('YYYYMMDD HH:mm')
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      x.avgBuyPrice = (x.buyTurnover || 0) / (x.buyVolume || 1)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      x.avgSellPrice = (x.sellTurnover || 0) / (x.sellVolume || 1)
    })
    this.chart?.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: [{
        left: '2%',
        right: '2%',
        top: '1%',
        height: '20%',
        containLabel: true
      }, {
        left: '2%',
        right: '2%',
        top: '25%',
        height: '20%',
        containLabel: true,
      }, {
        left: '2%',
        right: '2%',
        top: '50%',
        height: '20%',
        containLabel: true,
      }],
      dataset: {
        dimensions: ['startDate', 'buyVolume', 'sellVolume', 'buyCnt', 'sellCnt', 'buyTurnover', 'sellTurnover', 'avgBuyPrice', 'avgSellPrice'],

        source: this.list,
      },
      xAxis: [{
        type: 'category',
        // data: this.list.map((x : innerapi.IBuySellVolume) => ),
        axisTick: {
          alignWithLabel: true
        }
      }, {
        type: 'category',
        gridIndex: 1,
      }, {
        type: 'category',
        gridIndex: 2,
      }],
      yAxis: [{
        type: 'value',
        axisTick: {
          show: false
        },
      }, {
        type: 'value',
        axisTick: {
          show: false
        },
        gridIndex: 1,
      }, {
        type: 'value',
        axisTick: {
          show: false
        },
        gridIndex: 2,
      }, {
        type: 'value',
        axisTick: {
          show: false
        },
        gridIndex: 2,
      }],
      series: [{
        name: 'buyVolume',
        type: 'bar',
        stack: 'vistors',
        // barWidth: '60%',
        // animationDuration
      }, {
        name: 'sellVolume',
        type: 'bar',
        // stack: 'vistors',
        // barWidth: '60%',
        animationDuration
      }, {
        name: 'buyCnt',
        type: 'bar',
        // stack: 'vistors',
        // barWidth: '60%',
        animationDuration,
        yAxisIndex: 1,
        xAxisIndex: 1,
      }, {
        name: 'sellCnt',
        type: 'bar',
        animationDuration,
        yAxisIndex: 1,
        xAxisIndex: 1,
      }, {
        name: 'sellTurnover',
        type: 'bar',
        animationDuration,
        yAxisIndex: 2,
        xAxisIndex: 2,
      }, {
        name: 'BuyTurnover',
        type: 'bar',
        animationDuration,
        yAxisIndex: 2,
        xAxisIndex: 2,
      }, {
        name: 'avgBuyPrice',
        type: 'line',
        animationDuration,
        yAxisIndex: 3,
        xAxisIndex: 2,
      }, {
        name: 'avgSellPrice',
        type: 'line',
        animationDuration,
        yAxisIndex: 3,
        xAxisIndex: 2,
      }, {
        name: 'totalVolume',
        type: 'line',
        // stack: 'vistors',
        // barWidth: '60%',
        data: this.list.map((x : innerapi.IBuySellVolume) => x.sellVolume as any + x.buyVolume as any),
        animationDuration
      }
      ]
    })
  }

  private initChart() {
    this.chart = echarts.init(this.$refs.chartsDiv as HTMLDivElement, 'macarons')
    this.setOptions()
  }

  onSelect() : void {
    this.fetchData()
  }
}
