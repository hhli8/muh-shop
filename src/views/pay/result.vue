<template>
  <div class="pay-result">
    <p class="suc-title"><span class="iconfont">&#xe664;</span>支付成功</p>
    <div class="detail">
      <div class="detail-title">订单信息</div>
      <div class="item"><span class="name">订单号</span><span>{{order}}</span></div>
      <div class="item"><span class="name">支付金额</span><span>¥{{amount}}</span></div>
      <div class="item"><span class="name">支付时间</span><span>{{time}}</span></div>
    </div>
    <div class="operate">
      <span class="btn-index" @click="jumpIndex">返回首页</span>
      <span class="btn-order" @click="jumpOrder">查看订单</span>
    </div>
  </div>
</template>

<script>
export default {
  // http://172.32.30.167:8080/shop/payresult?charset=utf-8&out_trade_no=1231231238&method=alipay.trade.wap.pay.return&total_amount=1.00&sign=Bzgj8fYxoVCDMxN4Vu%2FJQncCs4YVsSLwobENOqADqZwczdQRKm1BGvubOHXVPjinOXc0mAEuOrOxGVbOIHRbIY6B3A36R9OQiGs%2F3hvWGqAEbaD8cJK8Tqae1FB3Ank73izNY8jA4RvY821IijdxEtTBZuKjGP08PLsndbAcW8T6JtRCfHNGJ5jy4bERCCkvaoz9%2BGECpaO9mXbaTbkxfTNNSYHa2UmUvpR%2FFmOqRHI9D1w0J03AH84ERDVE5UI%2BPNI0cta9HGJr6SJB7If8vpR5lraqX6%2Bnt2dWZF6EZur8F34H91fPTFh5qeOO6BFb8U3afiZWi%2F9uJo4W%2F5syAQ%3D%3D&trade_no=2020052522001416760504689795&auth_app_id=2016101800717286&version=1.0&app_id=2016101800717286&sign_type=RSA2&seller_id=2088102180167174&timestamp=2020-05-25%2011%3A37%3A48
  data () {
    return {
      order: '',
      amount: '',
      time: ''
    }
  },
  created () {
    let query = this.$route.query
    this.order = query.out_trade_no // trade_no
    this.amount = query.total_amount
    this.time = query.timestamp
    // console.log(this.$route.query.timestamp)
  },
  methods: {
    jumpIndex () {
      this.$router.push({
        name: 'Default'
      })
    },
    jumpOrder () {
      this.$router.push({
        name: 'OrderDetail',
        query: {
          order: 123456
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.pay-result {
  min-height: 100vh;
  background: #fff;
  .suc-title {
    text-align: center;
    font-size: 42px;
    padding: 50px;
    .iconfont {
      color: red;
      font-size: 42px;
      margin-right: 20px;
      vertical-align: middle;
    }
  }
  .detail {
    padding: 0 30px;
    &-title {
      color: #636363;
      font-size: 26px;
      margin-bottom: 12px;
    }
    .item {
      color: #636363;
      font-size: 30px;
      line-height: 46px;
      .name {
        color: #333;
        display: inline-block;
        width: 160px;
      }
    }
  }
  .operate {
    text-align: center;
    margin-top: 50px;
    span {
      display: inline-block;
      width: 220px;
      height: 60px;
      box-sizing: border-box;
      line-height: 58px;
      border: 1px solid #FB2055;
      border-radius: 4px;
    }
    .btn-index {
      color: #FB2055;
      margin-right: 30px;
    }
    .btn-order {
      background: #FB2055;
      color: #fff;
    }
  }
}
</style>
