/* eslint-disable */
import { datatype, trade } from "@/proto/proto";
import { AxiosStatic } from "axios";
import camelize from "camelize-ts";
import request from '@/utils/request'
const t = trade.Signal.create({ signalId: "ss" });

export interface ITradeApi {
  url: String
  axios: AxiosStatic
  QueryTradeLogs(
    symbol: string,
    cursor: number,
    limit: number
  ): Promise<datatype.QueryTradeLogResp>;
}

export class TradeApi implements ITradeApi {
  url: String;
  axios: AxiosStatic;
  constructor(url: String, axios: any) {
    this.url = url;
    this.axios = axios;
  }
  async QueryTradeLogs(
    symbol: string,
    cursor: number,
    limit: number
  ): Promise<datatype.QueryTradeLogResp> {
    var param: datatype.QueryTradeLogReq = datatype.QueryTradeLogReq.create({
      symbol: symbol,
      cursor: cursor,
      limit: limit,
      source: "queryapi",
    });
    console.log("query_tralog:", param);
    let resp = await this.axios.post(
      `${this.url}/tradelogs`,
      datatype.QueryTradeLogReq.toObject(param)
    );
    return new Promise<datatype.QueryTradeLogResp>((resolve, reject) => {
      let response = datatype.QueryTradeLogResp.create(
        camelize<datatype.QueryTradeLogResp>(resp.data)
      );
      resolve(response);
    });
  }
}
