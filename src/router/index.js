import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Default',
    component: resolve => { require(['@/views/default'], resolve) },
    meta: {
      title: '商城'
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: resolve => { require(['@/views/mine'], resolve) }
  },
  {
    path: '/classify',
    name: 'Classify',
    component: resolve => { require(['@/views/classify'], resolve) }
  },
  {
    path: '/detail/:id/:source',
    name: 'Detail',
    component: resolve => { require(['@/views/detail'], resolve) },
    meta: {
      title: '商品详情'
    }
  },
  {
    path: '/shopcar',
    name: 'Shopcar',
    component: resolve => { require(['@/views/shopcar'], resolve) }
  },
  {
    path: '/login',
    name: 'Login',
    component: resolve => { require(['@/views/login'], resolve) }
  },
  {
    path: '/createorder',
    name: 'CreateOrder',
    component: resolve => { require(['@/views/order/create.vue'], resolve) },
    meta: {
      title: '确认订单'
    }
  },
  {
    path: '/orderlist',
    name: 'OrderList',
    component: resolve => { require(['@/views/order/list.vue'], resolve) },
    meta: {
      title: '我的订单'
    }
  },
  {
    path: '/pay',
    name: 'Pay',
    component: resolve => { require(['@/views/pay'], resolve) },
    meta: {
      title: '收银台'
    }
  },
  // adress
  {
    path: '/adresslist',
    name: 'AdressList',
    component: resolve => { require(['@/views/adress/list.vue'], resolve) }
  },
  {
    path: '/addadress',
    name: 'AddAdress',
    component: resolve => { require(['@/views/adress/add.vue'], resolve) }
  },
  // 授信过程
  {
    path: '/credit',
    name: 'Credit',
    component: resolve => { require(['@/views/credit'], resolve) }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

export default router
