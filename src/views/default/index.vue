<template>
  <div class="page-default">
    <div class="container">
      <!--this is home-->
      <banner></banner>
      <!--<button @click="submit">提交</button>-->
      <!--<div>专区</div>-->
      <!--<div>新人</div>-->
      <!--<div>类目热销</div>-->
      <!--<div>人气推荐recommend</div>-->
      <recommend :list="recommends"></recommend>
      <!--<div>限制抢购</div>-->
      <!--<div>拼团</div>-->
      <!--<div>新品首发</div>-->
      <!--<div>
        <div><router-link :to="{name: 'Detail', params: {id: 11, source: 'taobao'}, query: {x: 99} }">商品1</router-link></div>
        <div><router-link :to="{name: 'Detail', params: {id: 2222, source: 'wy'}, query: {x: 99} }">商品2</router-link></div>
      </div>-->
    </div>
    <btm-nav></btm-nav>
  </div>
</template>

<script>
import banner from './components/banner'
import recommend from './components/recommend'
import btmNav from '@/components/nav'
export default {
  components: {
    banner,
    recommend,
    btmNav
  },
  data () {
    return {
      recommends: []
    }
  },
  computed: {
    //
  },
  created () {
    // console.log(process.env.VUE_APP_API_BASEURL)
    // console.log(this.$api)
    this.recommends = [1, 2, 2, 2, 2, 2, 2, 2, 2]
    // console.log(this.$api, this.$api['login/loginName'])
    //
    /* ajax.get('http://172.32.30.167:3001/alipay/sign', {}, (res) => {
      console.log(res)
    }) */
  },
  methods: {
    submit () {
      this.$api['alipay/getSign']({ x: 99, token: 123123 }).then((res) => {
        console.log(res)
        location.href = res.result
      })
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.page-default {
  min-height: 100vh;
  .container {
    padding-bottom: 80px;
  }
}
</style>
