<template>
  <div>
    <div id="chart_container"> </div>
    <action-table />
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { UDFCompatibleDatafeed } from '../../../public//datafeeds/udf/src/udf-compatible-datafeed'
import { bus, SymbolChangeEvent, TradeLogFocusEvent } from '@/utils/bus'
import ActionTable from '@/views/tradingview-chart/components/ActionTable.vue'

import * as TradingView from '../../../public/charting_library/charting_library.esm'
import {
  ResolutionString,
  IChartingLibraryWidget
} from '../../../public//charting_library/charting_library.esm'
@Component({
  name: 'TradingView',
  components: {
    ActionTable
  }
})
export default class extends Vue {
  private chart!: IChartingLibraryWidget
  // @Prop({ default: [] }) private data!: Array<any>
  @Prop({ default: 'xxxxx' }) private name!: String

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick() {}

  tradeLogFocus(event: TradeLogFocusEvent) {
    console.log('tradelogsfocus', event)
    const curRange = this.chart.activeChart().getVisibleRange()
    const interval = curRange.to - curRange.from
    const from = event.tsUsec / 1000000
    this.chart
      .activeChart()
      .setVisibleRange(
        { from: from, to: from + interval },
        { applyDefaultRightMargin: true }
      )
      .then((res: any) => {
        console.log('set_visible:', res)
        console.log('get_visible:', this.chart.activeChart().getVisibleRange())
      })
  }

  mounted() {
    const widgetOptions: TradingView.ChartingLibraryWidgetOptions = {
      symbol: 'summary-2021121317',
      // BEWARE: no trailing slash is expected in feed URL
      container: '',
      container_id: 'chart_container',
      // datafeed: this.feed,
      datafeed: new UDFCompatibleDatafeed(
        'http://localhost:8888/v1',
        10 * 1000
      ), // 10s刷一次数据
      interval: '1' as ResolutionString,
      timeframe: '5M',
      library_path: '/charting_library/',
      overrides: {
        'mainSeriesProperties.style': 1
      },
      locale: 'zh',
      timezone: 'Asia/Shanghai', // todo: ustawianie timezone'a po strefie usera
      charts_storage_api_version: '1.1',
      client_id: 'tradingview.com',
      user_id: 'public_user_id',
      debug: false,
      disabled_features: ['use_localstorage_for_settings'],
      enabled_features: [
        'study_templates',
        'move_logo_to_main_pane',
        'go_to_date'
      ],
      autosize: false,
      width: '100%',
      height: 600,
      study_count_limit: 5, // 多图布局图标的最大指标数量
      toolbar_bg: '#f4f7f9',
      symbol_search_request_delay: 100, // 搜索时100毫秒访问1次
      time_frames: [
        {
          text: '12m',
          resolution: '1' as ResolutionString,
          description: '1Years',
          title: '1Years-Min'
        },
        {
          text: '24m',
          resolution: 'D' as ResolutionString,
          description: '2Years',
          title: '2Year'
        },
        {
          text: '12m',
          resolution: 'D' as ResolutionString,
          description: '1Years',
          title: '1Year-Day'
        },
        {
          text: '1d',
          resolution: '60' as ResolutionString,
          description: '1Day',
          title: '1Day'
        },
        {
          text: '10d',
          resolution: 'D' as ResolutionString,
          description: '10Day',
          title: '10Day'
        }
      ]
    }
    // eslint-disable-next-line new-cap
    this.chart = new TradingView.widget(widgetOptions)
    this.chart.onChartReady(() => {
      this.chart.activeChart()
      this.chart.activeChart().dataReady(() => {
        console.log(
          'data ready: current symbol:',
          this.chart.activeChart().symbol()
        )
        // bus.emit('type', { symbol: this.chart.activeChart().symbol() })
        const e: SymbolChangeEvent = {
          symbol: this.chart.activeChart().symbolExt().symbol
        }
        bus.emit('symbolChange', e)
        console.log('get_visible:', this.chart.activeChart().getVisibleRange())
        this.chart
          .activeChart()
          .setVisibleRange(
            { from: 1646896381, to: 1646982781 },
            { applyDefaultRightMargin: true }
          )
          .then((res: any) => {
            console.log('set_visible:', res)
            console.log(
              'get_visible:',
              this.chart.activeChart().getVisibleRange()
            )
          })
        // bus.emit(Events.Key(), "")
      })
      this.chart
        .activeChart()
        .onVisibleRangeChanged()
        .subscribe(null, (range: any) => {
          console.log('visible_range_change:', range)
        })
      this.chart
        .activeChart()
        .onIntervalChanged()
        .subscribe(
          null,
          (
            interval: TradingView.ResolutionString,
            timeFrameParameters: {
              timeframe?: TradingView.TimeFrameValue | undefined
            }
          ) => {
            // console.log("interval change:", interval, timeframe);
          }
        )
      this.chart
        .activeChart()
        .onVisibleRangeChanged()
        .subscribe(null, data => {
          // console.log("range change:", data);
          // console.log(widget.activeChart().getVisibleRange())
        })
    })
    console.log('char', this.chart)
    bus.on('tradeLogFocus', this.tradeLogFocus)
  }

  setup(props: any, context: any) {
    // console.log(props); // { user: '' }
    console.log(123)
    return {}
  }
}
</script>
