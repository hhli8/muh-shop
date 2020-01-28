import axios from 'axios'
import api from './api'
global.ajax = axios

export default {
  install: (Vue, options) => {
    Vue.prototype.$api = api
  }
}
