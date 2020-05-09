export default [
  {
    path: '/admin_default',
    name: 'admin_default',
    component: resolve => { require(['@/admin/default.vue'], resolve) }
  }
]
