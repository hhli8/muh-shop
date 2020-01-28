<template>
  <div class="detaildesc">
    <div class="divide-bar flex justify-content-center align-items-center">
      <span class="line"></span>
      <div class="bar-text">详情</div>
      <div class="line"></div>
    </div>
    <img v-for="(item, index) in decs" :src="item" :key="index" alt="" />
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
  computed: {
    decs () {
      return (this.detailData && this.detailData.detaildesc) || []
    }
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
.detaildesc {
  background: #fff;
  .divide-bar {
    background-color: #f2f2f2;
    color: #999;
    font-size: 24px;
    padding: 20px 0;
    .line {
      display: inline-block;
      width: 60px;
      border-top: 1px solid #999;
    }
    .bar-text {
      margin: 0 16px;
    }
  }
  img {
    width: 100%;
    display: block;
  }
}
</style>
