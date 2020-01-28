<template>
  <div class="page-detail">
    <detailinfo :detailData="detail"></detailinfo>
    <!--<couponinfo :detailData="detail"></couponinfo>-->
    <params></params>
    <!--<div>评价</div>-->
    <detaildesc :detailData="detail"></detaildesc>
    <!--<div>推荐</div>-->
    <bottombar @toggleSkushow="toggleSkushow"></bottombar>
    <muh-popup v-model="skushow">
      <button @click="skushow=false">关闭</button>
      <div>asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />end</div>
    </muh-popup>
  </div>
</template>

<script>
import data from './data.js'
import detailinfo from './components/detailinfo.vue'
// import couponinfo from './components/coupon.vue'
import params from './components/detailparams.vue'
import detaildesc from './components/detaildesc.vue'
import bottombar from './components/bottombar.vue'
export default {
  components: {
    detailinfo,
    // couponinfo
    params,
    detaildesc,
    bottombar
  },
  data () {
    return {
      detail: {},
      skushow: false
    }
  },
  created () {
    // console.log(this.$route.query, this.$route.params)
    setTimeout(() => {
      this.detail = data
    }, 30)
  },
  methods: {
    toggleSkushow (val) {
      this.skushow = val
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
.page-detail {
  padding-bottom: 100px;
}
</style>
<style lang="scss">
.page-detail {
  .muh-popup {
    max-height: 80% !important;
  }
}
</style>
