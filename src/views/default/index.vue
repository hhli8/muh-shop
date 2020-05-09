<template>
  <div class="page-default" ref="scroll">
    <div class="container">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <banner :banners="banners"></banner>
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
        <div>
          <div v-show="!finish" class="van-list__loading"><div class="van-loading van-loading--circular van-loading van-list__loading-icon" style="color: rgb(201, 201, 201);"><span class="van-loading__spinner van-loading__spinner--circular"><svg viewBox="25 25 50 50" class="van-loading__circular"><circle cx="50" cy="50" r="20" fill="none"></circle></svg></span></div><span class="van-list__loading-text">加载中...</span></div>
          <div v-show="finish" class="van-list__finished-text">没有更多了</div>
        </div>
      </van-pull-refresh>
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
      banners: [],
      recommends: [],
      isLoading: false, // 刷新
      page: 1,
      isloading: false, // 加载更新
      finish: false
    }
  },
  mounted () {
    let h = document.documentElement.clientHeight || document.body.clientHeight // 屏幕高度
    window.addEventListener('scroll', () => {
      if (this.$route.name === 'Default') {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop // 滚动距离
        if (this.$refs.scroll) {
          let scrollHeight = this.$refs.scroll.scrollHeight // 可滚动的页面的高度
          let distance = scrollHeight - h - scrollTop
          if (distance < 200 && !this.isloading && !this.finish) {
            this.load(++this.page)
          }
        }
      }
    })
  },
  activated () {},
  beforeRouteLeave (to, from, next) {
    this.$route.meta.xy.y = window.pageYOffset
    next()
  },
  created () {
    this.init()
  },
  methods: {
    async init (fun) {
      await this.$api['defaul/getBanner']({}).then((res) => {
        if (res) this.banners = res || []
      })
      await this.load(1)
      if (fun) fun()
    },
    load (page) {
      this.isloading = true
      return this.$api['defaul/getGoods']({
        page,
        size: 20
      }).then((res) => {
        this.recommends = this.recommends.concat(res.list)
        this.isloading = false
        if (this.recommends.length === res.total) this.finish = true
      }).catch(() => {
        this.isloading = false
      })
    },
    submit () {
      this.$api['alipay/getSign']({ x: 99, token: 123123 }).then((res) => {
        console.log(res)
        location.href = res.result
      })
    },
    onRefresh () {
      this.finish = false
      this.page = 1
      this.recommends = []
      this.init(() => {
        this.isLoading = false
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
