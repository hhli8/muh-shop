<template>
  <div>
    mine
    <div>
      <router-link :to="{name: 'AdressList'}">地址管理</router-link>
      <br /><br />
      <router-link :to="{name: 'OrderList'}">订单列表</router-link>
      <br /><br />
      <router-link :to="{name: 'Login'}">注册登录</router-link>
      <br /><br />
    </div>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style>
</style>
