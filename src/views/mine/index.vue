<template>
  <div class="page-mine">
    <div class="box">
      ppppppppp<br /><br /><br /><br /><br /><br /><br />
      {{x}}
      <input type="text" placeholder="请输入" @focus="onFocus"/>
    </div>
    <div class="container">
      <!--mine
      <div>
        <router-link :to="{name: 'AdressList'}">地址管理</router-link>
        <br /><br />
        <router-link :to="{name: 'OrderList'}">订单列表</router-link>
        <br /><br />
        <router-link :to="{name: 'Login'}">注册登录</router-link>
        <br /><br />
      </div>-->
      <div class="head">
        <div class="head-bg">
          <div class="header">
            <img class="header-pic" src="http://img.alicdn.com/imgextra/i3/1614112418/O1CN01fmdBm71TjUBQjY9y8_!!0-item_pic.jpg_640x640q80_.webp" alt="" /><span class="header-nick">昵称</span>
          </div>
        </div>
        <div class="head-list">
          <div class="head-list-con">
            <div class="lists-before">
              <!--<div class="title">
                <span class="title-name">我的订单</span><span class="seeall">查看全部</span>
              </div>-->
              <div class="lists flex">
                <div class="item" v-for="(item,index) in order" :key="index" @click="jumpOrder(item)">
                  <div class="item-tap">
                    <span class="iconfont" v-html="item.icon"></span>
                    <div class="name">{{item.name}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-manage">
        <div class="content">
          <div class="item" v-for="(item,index) in manage" :key="index" @click="jumpUrl(item)">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <btm-nav :index="3"></btm-nav>
  </div>
</template>

<script>
import btmNav from '@/components/nav'
export default {
  components: {
    btmNav
  },
  data () {
    return {
      isLogin: false,
      order: [
        // { name: '全部', icon: '&#xe60b;' },
        { name: '待付款', icon: '&#xe60b;', type: 'b100' },
        { name: '待发货', icon: '&#xe615;', type: 'b101' },
        { name: '待收货', icon: '&#xe605;', type: 'b102' },
        { name: '待评价', icon: '&#xe60c;', type: 'b103' }
      ],
      manage: [
        { name: '地址管理', icon: '&#xe60b;', page: 'AdressList' }
      ],
      scHeight: '',
      x: '88'
    }
  },
  mounted () {
    console.log(document.body.clientHeight, window.innerHeight)
    this.scHeight = window.innerHeight
    this.x = document.body.clientHeight + ' :' + window.innerHeight
  },
  methods: {
    jumpUrl (item) {
      this.$router.push({
        name: item.page
      })
    },
    jumpOrder (item) {
      this.$router.push({
        name: 'OrderList'
      })
    },
    onFocus () {
      this.x = document.body.clientHeight + ' :' + window.innerHeight // window.innerHeight - this.scHeight
    }
  }
}
</script>

<style lang="scss" scoped="scoped" src="./index.scss">
</style>
