import Vue from 'vue'
import VueRouter from 'vue-router'
import admin from './admin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Default',
    component: resolve => { require(['@/views/default'], resolve) },
    meta: {
      title: '商城',
      keepAlive: true,
      xy: { x: 0, y: 0 }
    }
  },
  {
    path: '/test', // 测试专用
    name: 'Test',
    component: resolve => { require(['@/views/default/test.vue'], resolve) }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: resolve => { require(['@/views/mine'], resolve) },
    meta: {
      title: '我的'
    }
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
    path: '/orderdetail',
    name: 'OrderDetail',
    component: resolve => { require(['@/views/order/detail.vue'], resolve) },
    meta: {
      title: '订单详情'
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
  {
    path: '/payresult',
    name: 'PayResult',
    component: resolve => { require(['@/views/pay/result'], resolve) },
    meta: {
      title: '收银台'
    }
  },
  // adress
  {
    path: '/adresslist',
    name: 'AdressList',
    component: resolve => { require(['@/views/adress/list.vue'], resolve) },
    meta: {
      title: '收货地址管理'
    }
  },
  {
    path: '/addadress',
    name: 'AddAdress',
    component: resolve => { require(['@/views/adress/add.vue'], resolve) },
    meta: {
      title: '添加地址'
    }
  },
  // 授信过程
  {
    path: '/credit',
    name: 'Credit',
    component: resolve => { require(['@/views/credit'], resolve) }
  },
  ...admin
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    // 仅浏览器返回时有用 且父元素不得有overflow
    if (savedPosition) {
      return savedPosition
    } else if (to.meta.xy) {
      return to.meta.xy
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router
