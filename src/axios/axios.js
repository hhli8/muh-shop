import axios from 'axios'
import {
  requestSuccessFunc,
  requestFailFunc,
  responseSuccessFunc,
  responseFailFunc
} from './config.js'

let axiosInstance = {}

axiosInstance = axios.create({
  timeout: 36000,
  baseURL: process.env.VUE_APP_API_BASEURL
})

// 注入请求拦截
axiosInstance.interceptors.request.use(requestSuccessFunc, requestFailFunc)
// 注入响应拦截
axiosInstance.interceptors.response.use(responseSuccessFunc, responseFailFunc)

export default axiosInstance
