<template>
  <div>
    <!--<p>商品属性相关</p>-->
    <div class="pic-gallery-wrapper" :style='"height: "+screenWidth+"px;"'>
      <van-swipe :show-indicators="false" :autoplay="3000" ref="swiper" @change="onChangeSwiper">
        <van-swipe-item v-for="(item, index) in swipers" :key="index">
          <div class="img-box">
            <img :src="item"/>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="current-slide">{{swiperIndex}}/{{swipers.length}}</div>
    </div>
    <!---->
    <div class="good-price">
      <div class="cur-price"><span class="unit">¥</span> {{detailData.price}}</div>
      <div class="original-price"><span class="text">价格</span> <span class="unit">¥</span> <span class='value'>{{detailData.orgprice}}</span></div>
      <div class="good-title">{{detailData.goodtitle}}</div>
    </div>
    <!---->
  </div>
</template>

<script>
export default {
  props: {
    detailData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      screenWidth: '',
      swiperIndex: 1
    }
  },
  computed: {
    swipers () {
      return (this.detailData && this.detailData.swipers) || []
    }
  },
  created () {
    this.screenWidth = window.screen.width * (window.devicePixelRatio || 1)
  },
  methods: {
    onChangeSwiper (index) {
      this.swiperIndex = index + 1
    }
  }
}
</script>

<style scoped="scoped" lang="scss" src="./detailinfo.scss"></style>
<style lang="scss">
.pic-gallery-wrapper {
  .van-swipe {
    height: 100%;
  }
  .van-swipe__track {
    display: flex;
    height: 100%;
  }
}
</style>
