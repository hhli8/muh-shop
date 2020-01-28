<template>
  <div>
    this is default
    <div>banner</div>
    <div>专区</div>
    <div>新人</div>
    <div>类目热销</div>
    <div>人气推荐</div>
    <div>限制抢购</div>
    <div>拼团</div>
    <div>新品首发</div>
    <div>
      <div><router-link :to="{name: 'Detail', params: {id: 11, source: 'taobao'}, query: {x: 99} }">商品1</router-link></div>
      <div><router-link :to="{name: 'Detail', params: {id: 2222, source: 'wy'}, query: {x: 99} }">商品2</router-link></div>
    </div>
    <btm-nav></btm-nav>
  </div>
</template>

<script>
import btmNav from '@/components/nav'
export default {
  components: {
    btmNav
  },
  created () {
    // console.log(process.env.VUE_APP_API_BASEURL)
    console.log(this.$api)
  }
}
</script>

<style>
</style>
