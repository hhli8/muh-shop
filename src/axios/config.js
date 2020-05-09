import qs from 'qs'
export function requestSuccessFunc (config) {
  if (config.str) config.data = qs.stringify(config.data)
  return config
}
export function requestFailFunc (error) {
  return Promise.reject(error)
}
export function responseSuccessFunc (res) {
  let result = res.data
  if (result) {
    let code = result.code
    if (code === 200) {
      return result.data
    } else {
      return {}
    }
  } else {
    return {}
  }
}
export function responseFailFunc (error) {
  return Promise.reject(error)
}
