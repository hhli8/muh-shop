import API_CONFIG from '@/api'
import axios from './axios'
class MakeApi {
  constructor (options) {
    this.api = {}
    this.apiBuilder(options)
  }
  apiBuilder ({
    config = {}
  }) {
    Object.keys(config).map(namespace => {
      this._apiSingleBuilder({
        namespace,
        config: config[namespace]
      })
    })
  }
  _apiSingleBuilder ({
    namespace,
    config = {}
  }) {
    config.forEach(api => {
      // console.log(api)
      const { name, path, method, params } = api
      let url = path
      let assignData = {
        url,
        method
      }
      Object.defineProperty(this.api, `${namespace}/${name}`, {
        value (outerParams, outerOptions) {
          // console.log(outerParams, outerOptions)
          let _data = { ...params, ...outerParams }
          return axios(_normoalize({
            ...assignData
          }, _data))
        }
      })
    })
  }
}
function _normoalize (orginOptions, data) {
  let options = JSON.parse(JSON.stringify(orginOptions))
  // let url = options.url
  if (options.method === 'POST') {
    options.data = data
  } else if (options.method === 'GET') {
    options.params = data
  }
  return options
}
export default new MakeApi({
  config: API_CONFIG
})['api']
