// import './public-path.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from './axios'
import '@/assets/base.scss'
import '@/assets/common.scss'
import { Swipe, SwipeItem, Toast } from 'vant'
import 'vant/lib/index.css'
// import { MPopup, MSku, MClassify } from 'vue-muh'
import MPopup from 'vue-muh/lib/popup'
import MSku from 'vue-muh/lib/sku'
import MClassify from 'vue-muh/lib/classify'
import mixinBase from '@/mixins/base'

Vue.config.productionTip = false

Vue.use(Axios)
  .use(Swipe)
  .use(SwipeItem)
  .use(Toast)
Vue.use(MSku)
  .use(MPopup)
  .use(MClassify)

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
