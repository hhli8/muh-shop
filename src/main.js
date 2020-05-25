// import './public-path.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from './axios'
import '@/assets/base.scss'
import { Swipe, SwipeItem, Toast, PullRefresh } from 'vant'
import 'vant/lib/index.css'
import '@/assets/common.scss'
// import { MPopup, MSku, MClassify } from 'vue-muh'
import MPopup from 'vue-muh/lib/popup'
import MSku from 'vue-muh/lib/sku'
import MClassify from 'vue-muh/lib/classify'
import MDialog from 'vue-muh/lib/dialog'
import MButton from 'vue-muh/lib/button'
import MJDPicker from 'vue-muh/lib/jdpicker'
import mixinBase from '@/mixins/base'

Vue.config.productionTip = false

Vue.use(Axios)
  .use(Swipe)
  .use(SwipeItem)
  .use(Toast)
  .use(PullRefresh)
Vue.use(MSku)
  .use(MPopup)
  .use(MClassify)
  .use(MDialog)
  .use(MButton)
  .use(MJDPicker)

Vue.mixin(mixinBase)

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
  /* mounted () {
    document.dispatchEvent(new Event('render-event'))
  } */
}).$mount('#app')

/*
 *
 * "prerender-spa-plugin": "^3.4.0",
    "puppeteer": "^2.1.1", ----预渲染
 */
