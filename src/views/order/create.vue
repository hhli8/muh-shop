<template>
  <div class="create-order-page">
    <div class="receiver">
      <div class="receiver-box flex adr align-items-center" v-if="defaultAdress" @click="selectAdress">
        <div class="receiver-adress" style="flex:1;">
          <div class="receiver-adress-b"><span class="name">{{defaultAdress.name}}</span><span class="phone">{{defaultAdress.phone}}</span></div>
          <div class="receiver-adress-p flex align-items-center">
            <span class="iconfont icon-adress">&#xe682;</span>
            <div class="adress">
              <div class="adress-value">{{defaultAdress.province + defaultAdress.city + defaultAdress.detail}}</div>
            </div>
          </div>
        </div>
        <span class="iconfont icon-right">&#xe604;</span>
      </div>
      <div class="receiver-box flex n-adr align-items-center" v-else @click="addAdress">
        <span class="iconfont icon-adress">&#xe682;</span>
        <div style="flex:1;">请先填写收货人信息</div>
        <span class="iconfont icon-right">&#xe604;</span>
      </div>
    </div>
    <!---->
    <div class="good">
      <div class="good-shop flex align-items-center">
        <span class="iconfont">&#xe663;</span><span>沐诗旗舰商城</span>
      </div>
      <div class="good-info flex">
        <div class="info-img"><img :src="goodInfo.goodimg" alt="" /></div>
        <div class="info-params">
          <div class="title">{{goodInfo.goodtitle}}</div>
          <div class="params">{{goodInfo.params}}</div>
        </div>
        <div class="number">
          <div><span class="unit">¥</span><span class="price">{{goodInfo.price}}</span></div>
          <div class="count">×{{goodInfo.count}}</div>
        </div>
      </div>
    </div>
    <div class="good-more">
      <div class="item flex cal-count">
        <span class="n-text">购买数量</span>
        <div class="n-right">
          <span class="iconfont" @click="minus">&#xe620;</span><span class="icon-count">{{goodInfo.count}}</span><span class="iconfont" @click="add">&#xe632;</span>
        </div>
      </div>
      <!--<div class="item cal-count">
        <span class="n-text">配送方式</span>
        <div></div>
      </div>-->
      <div class="item flex">
        <span class="n-text">订单备注</span>
        <div class="n-right">
          <textarea name="" rows="" cols="" placeholder="选填,请先和商家协商一致"></textarea>
        </div>
      </div>
      <!--<div>
        demo<br />asdasda<br />asdasdasd<br />asdasdasd<br />asdasdasd<br />asdasdasd<br />asdasdasd<br />asdasdasd<br />asdasdasd<br />asdasdasd<br />end
      </div>-->
    </div>
    <!---->
    <div class="submit flex align-items-center">
      <div class="all-price">共<span class="count">{{goodInfo.count}}</span>件，总金额<span class="unit">¥</span><span class="inter">{{parseInt(totalPrice)}}.</span><span class="float">{{parseInt(getFloat(totalPrice))}}</span></div>
      <div class="submit-btn" @click="submit">提交订单</div>
    </div>
    <!---->
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultAdress: '',
      goodInfo: '',
      selectGood: ''
    }
  },
  computed: {
    totalPrice () {
      return this.goodInfo.price ? this.goodInfo.price * this.goodInfo.count : 0
    }
  },
  created () {
    setTimeout(() => {
      this.defaultAdress = {
        name: '约翰逊',
        phone: '15958988888',
        province: '浙江',
        city: '杭州',
        detail: '西湖区西湖景区西湖路88号'
      }
      this.selectGood = JSON.parse(sessionStorage.getItem('MUHAIGOODINFO'))
      // console.log(this.selectGood)
      this.goodInfo = {
        goodimg: 'http://img.alicdn.com/imgextra/i3/1614112418/O1CN01fmdBm71TjUBQjY9y8_!!0-item_pic.jpg_640x640q80_.webp',
        count: this.selectGood.count,
        params: this.selectGood.params,
        goodtitle: this.selectGood.title,
        price: this.selectGood.good.curprice,
        discount: []
      }
    }, 60)
  },
  methods: {
    selectAdress () {
      //
    },
    addAdress () {
      //
    },
    minus () {
      this.goodInfo.count--
    },
    add () {
      this.goodInfo.count++
    },
    getFloat (d) {
      let v = this.totalPrice * 100 % 100
      return v > 9 ? v : '0' + v
    },
    submit () {
      this.$router.push({
        name: 'Pay'
      })
    }
  }
}
</script>

<style scoped="scoped" lang="scss" src="./create.scss"></style>
