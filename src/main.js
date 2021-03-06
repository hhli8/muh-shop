import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from './axios'
import '@/assets/base.scss'
import '@/assets/common.scss'
import { Swipe, SwipeItem, Toast } from 'vant'
import 'vant/lib/index.css'
import { MPopup, MSku } from 'vue-muh'
import mixinBase from '@/mixins/base'

Vue.config.productionTip = false

Vue.use(Axios).use(Swipe).use(SwipeItem).use(Toast).use(MSku).use(MPopup)

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
}).$mount('#app')
