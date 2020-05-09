<template>
  <div class="page-detail">
    <detailinfo :detailData="detail"></detailinfo>
    <!--<couponinfo :detailData="detail"></couponinfo>-->
    <!--<params></params>-->
    <!--<div>评价</div>-->
    <detaildesc :detailData="detail"></detaildesc>
    <!--<div>推荐</div>-->
    <bottombar @toggleSkushow="toggleSkushow" :count="carcount"></bottombar>
    <muh-popup v-model="skushow">
      <div class="popup-sku" style="height: 100%;display: flex;flex-direction: column;">
        <div style="flex:1;overflow: hidden;">
          <muh-sku
            ref="muhsku"
            :goodlist="goods"
            :skulist="skus"
            :maxcount="maxcount"
            :option="skuOption">
          </muh-sku>
        </div>
        <div class="confirm" @click="confirm">确定</div>
      </div>
    </muh-popup>
  </div>
</template>

<script>
import data from './data.js'
import detailinfo from './components/detailinfo.vue'
// import couponinfo from './components/coupon.vue'
// import params from './components/detailparams.vue'
import detaildesc from './components/detaildesc.vue'
import bottombar from './components/bottombar.vue'
export default {
  components: {
    detailinfo,
    // couponinfo
    // params,
    detaildesc,
    bottombar
  },
  data () {
    return {
      detail: {}, // 详情总数据
      skushow: false, // sku弹窗显示
      skuOption: {},
      skuOpenType: '', // sku弹窗的类型
      carcount: 0 // 购物车数量
    }
  },
  computed: {
    goods () {
      return (this.detail && this.detail.goodlist) || []
    },
    skus () {
      return (this.detail && this.detail.skus) || []
    },
    maxcount () { // 暂先不根据单个类别限制
      return (this.detail && this.detail.maxcount) || 1
    }
  },
  created () {
    // console.log(this.$route.query, this.$route.params)
    setTimeout(() => {
      this.detail = data
      this.skuOption = {
        structure: {
          pname: '',
          pid: '',
          chindren: '',
          cname: '',
          cid: '',
          price: 'curprice'
        },
        gimg: 'http://img.alicdn.com/imgextra/i3/1614112418/O1CN01fmdBm71TjUBQjY9y8_!!0-item_pic.jpg_120x120q50s150.jpg', // 默认图片
        gprice: data.price
      }
      this.carcount = 100
    }, 30)
  },
  methods: {
    toggleSkushow (val) {
      this.skushow = val.show
      this.skuOpenType = val.type
    },
    confirm () {
      this.$refs.muhsku.confirm((res) => {
        // console.log(res)
        if (!res.good) {
          this.$toast('请选择商品属性')
          return false
        } else {
          console.log(res)
          this.skushow = false
          let type = this.skuOpenType
          if (type === 'add') {
            this.carcount++
          } else if (type === 'buy') {
            sessionStorage.setItem('MUHAIGOODINFO', this.getParamsStr(res))
            this.$router.push({
              name: 'CreateOrder'
            })
          }
        }
      })
    },
    getParamsStr (res) {
      let skuArr = res.skuArr
      let params = this.detail.skus
      let str = ''
      params.forEach((item, index) => {
        str += item.pname + ':' + skuArr[index].vname + ';'
      })
      res.params = str
      res.title = this.detail.goodtitle
      return JSON.stringify(res)
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
.page-detail {
  padding-bottom: 100px;
  .popup-sku {
    .confirm {
      height: 90px;
      line-height: 90px;
      text-align: center;
      background: #ed145b;
      color: #fff;
      font-size: 32px;
    }
  }
}
</style>
<style lang="scss">
.page-detail {
  .muh-popup {
    border-radius: 0.266666rem 0.266666rem 0 0;
  }
}
</style>
<style scoped="scoped">
.page-detail /deep/ .muh-popup {
  height: 80%;
}
.page-detail /deep/ .muh-sku {
  padding: 0.32rem;
  box-sizing: border-box;
}
.page-detail /deep/ .muh-sku-good .good-img {
  width: 2.4rem;
  height: 2.4rem;
}
.page-detail /deep/ .muh-sku-good .good-info .price {
  color: #ed145b;
  font-size: 0.4rem;
}
.page-detail /deep/ .muh-sku-good .good-info .txt {
  font-size: 0.346666rem;
  margin-top: 0.213333rem;
}
.page-detail /deep/ .muh-sku-list .name {
  font-size: 0.346666rem;
}
.page-detail /deep/ .muh-sku-list .sitem {
  font-size: 0.373333rem;
}
.page-detail /deep/ .count-box {
  border-top: 0.013333rem solid #2c3e50;
  padding-top: 0.213333rem;
}
.page-detail /deep/ .count-box .iconfont {
  font-size: 0.373333rem;
}
.page-detail /deep/ .count-name {
  line-height: .66667rem;
}
</style>
