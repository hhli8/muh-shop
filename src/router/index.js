import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Default',
    component: resolve => { require(['@/views/default'], resolve) }
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
