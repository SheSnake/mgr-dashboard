/* eslint-disable */
// @ts-nocheck
import { datatype, st } from "@/proto/proto";

type TradeLogTypeMap = Record<st.TradeLogType, string>;
export const tradeLogTypeMap: TradeLogTypeMap = {
  [st.TradeLogType.NORMAL_LOG]: "普通事件",
  [st.TradeLogType.CREATE_TRADE]: "建单",
  [st.TradeLogType.CANCEL_TRADE]: "取消",
  [st.TradeLogType.DEAL_TRADE]: "成交",
  [st.TradeLogType.PLAN_OPEN]: "开仓",
  [st.TradeLogType.PLAN_OVER]: "平仓",
};

type TradeSubStateTypeMap = Record<st.TradeSubState, string>;
export const tradeSubStateMap: TradeSubStateTypeMap = {
  [st.TradeSubState.DEFAULT_TRADE_SUB_STATE]: "默认",
  [st.TradeSubState.TRADE_SUB_UNSUBMIT]: "未提交",
  [st.TradeSubState.TRADE_SUB_SUBMITTED]: "已提交",
  [st.TradeSubState.TRADE_SUB_PARTIAL_FILLED]: "部分成交",
  [st.TradeSubState.TRADE_SUB_FULL_FILLED]: "完全成交",
  [st.TradeSubState.TRADE_SUB_CANCELING]: "取消中",
  [st.TradeSubState.TRADE_SUB_CANCELED]: "已取消",
  [st.TradeSubState.TRADE_SUB_REJECTED]: "被拒绝",
  [st.TradeSubState.TRADE_SUB_EXECUTING]: "执行中",
  [st.TradeSubState.TRADE_TIMEOUT_CLOSED]: "超时关单",
};

type SelectItem = {
  text: string;
  value: number;
};

function convertMapToSelect<K extends number, V extends string>(
  records: Record<K, V>
): Array<SelectItem> {
  var selectes: SelectItem[] = new Array();
  for (let k in records) {
    selectes.push({ text: records[k], value: k });
  }
  return selectes;
}

export const tradeLogTypeSelect = convertMapToSelect(tradeLogTypeMap);
export const tradeSubStateSelect = convertMapToSelect(tradeSubStateMap);