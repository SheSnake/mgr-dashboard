import mitt from 'mitt'

export type SymbolChangeEvent = {
  symbol : string
}

export type TradeLogFocusEvent = {
  tsUsec : number
}

export type Events = {
  symbolChange: SymbolChangeEvent
  tradeLogFocus : TradeLogFocusEvent
}

export const bus = mitt<Events>()
