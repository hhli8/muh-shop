<template>
  <div class='pay-page'>
    <!--收银台
    <div>
      <router-link :to="{name: 'Login'}">注册登录</router-link>
    </div>-->
    <div class="pay-cash">
      <p class="pay-cash-text">实付金额(元)</p>
      <div class="pay-cash-price">82.00</div>
    </div>
    <div class="way-title">选择支付方式</div>
    <div class="ways">
      <!--<div class="ways-item flex align-items-center" @click="show('')"><span class="iconfont zhifub">&#xe68a;</span><div>支付宝扫码支付</div></div>-->
      <!--<div class="ways-item flex align-items-center" @click="show('weixin')"><span class="iconfont weixin">&#xe665;</span><div>微信扫码支付</div></div>-->
      <div class="ways-item flex align-items-center" @click="alipay"><span class="iconfont zhifub">&#xe68a;</span><div>支付宝支付</div></div>
      <!--<div class="ways-item flex align-items-center" @click="auth"><span class="iconfont weixin">&#xe665;</span><div>微信授权支付</div></div>-->
    </div>
    <!--<div class="warn-text">支付完成后截图发给微信账号:lihaihong8877(唯一人工客服)</div>
    <div class="bottom flex align-items-center">
      <button @click="backhome">返回首页</button>
      <button class="list-btn" @click="orderlist">订单列表</button>
    </div>-->
    <muh-popup v-model="showpopup">
      <div>
        <img v-if="paytype === 'weixin'" src="~@/assets/img/pay-type-weixin.jpg" alt="" />
        <img v-else src="~@/assets/img/pay-type-zhifubao.jpg" alt="" />
      </div>
    </muh-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showpopup: false,
      paytype: ''
    }
  },
  methods: {
    show (type) {
      this.paytype = type
      this.showpopup = true
    },
    auth () {
      // this.$toast('暂不支持')
    },
    backhome () {
      this.$router.push({
        name: 'Default'
      })
    },
    orderlist () {
      this.$router.push({
        name: 'OrderList'
      })
    },
    alipay () {
      this.$api['alipay/getSign']({ x: 99, token: 123123 }).then((res) => {
        console.log(res)
        location.href = res.url
      })
    }
  }
}
</script>

<style lang="scss" scoped="scoped" src="./index.scss"></style>
<style scoped="scoped">
.pay-page /deep/ .muh-popup {
  height: 80%;
}
</style>
