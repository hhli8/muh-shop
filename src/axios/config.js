import qs from 'qs'
export function requestSuccessFunc (config) {
  if (config.str) config.data = qs.stringify(config.data)
  return config
}
export function requestFailFunc (error) {
  return Promise.reject(error)
}
export function responseSuccessFunc (res) {
  return res.data
}
export function responseFailFunc (error) {
  return Promise.reject(error)
}
