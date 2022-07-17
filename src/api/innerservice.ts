import _Vue from 'vue'
import axios, { AxiosResponse } from 'axios'
import { datatype, innerapi } from '@/proto/proto'
import { loginapi } from '@/proto/gateway/loginapi'
import camelize from 'camelize-ts'
import { login } from './users'

class Service {
  GetTradeIndicator(req: datatype.QueryTradeLogReq) : Promise<datatype.QueryTradeLogResp> {
    const ax = axios.create({
      baseURL: process.env.VUE_APP_BASE_INNER_API, // url = base url + request url
      timeout: 5000,
      // withCredentials: true // send cookies when cross-domain requests
    })
    ax.interceptors.response.use(
      (resp : any) => {
        return datatype.QueryTradeLogResp.create(
          camelize<datatype.QueryTradeLogResp>(resp.data)
        ) as any
      }
    )
    return ax.post(
      '/v1/tradelogs',
      datatype.QueryTradeLogReq.toObject(req)
    )
  }

  GetBuySellVolume(req: innerapi.GetBuySellVolumeReq) : Promise<innerapi.IGetBuySellVolumeResp> {
    const ax = axios.create({
      baseURL: process.env.VUE_APP_BASE_INNER_API, // url = base url + request url
      // timeout: 5000,
      // withCredentials: true // send cookies when cross-domain requests
    })
    ax.interceptors.response.use(
      (resp : any) => {
        return innerapi.GetBuySellVolumeResp.create(
          camelize<innerapi.GetBuySellVolumeResp>(resp.data)
        ) as any
      }
    )
    return ax.get(
      `/inner/v1/getbuysellstatistics?start_sec=${req.startSec}&symbol_id=${req.symbolId}&aggr_interval_sec=${req.aggrIntervalSec}`
    )
  }

  async LoginByPassword(req: loginapi.LoginPasswordReq) : Promise<loginapi.LoginPasswordResp> {
    const ax = axios.create({
      baseURL: process.env.VUE_APP_BASE_INNER_API, // url = base url + request url
      timeout: 5000,
    })
    ax.interceptors.response.use(
      (resp : AxiosResponse<loginapi.LoginPasswordResp>) => {
        return loginapi.LoginPasswordResp.create(
          camelize<loginapi.LoginPasswordResp>(resp.data)
        ) as loginapi.LoginPasswordResp as any
      }
    )
    return ax.post(
      '/v1/login',
      loginapi.LoginPasswordReq.toObject(req)
    )
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $innerService : any
  }
}

export const ApiClient = new Service()

export class InnerService {
  public static install(Vue : typeof _Vue) : void {
    const service : Service = new Service()
    Vue.prototype.$innerService = service
  }
}
