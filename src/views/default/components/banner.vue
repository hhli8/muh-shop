<template>
  <div class="page-default-banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img :src="item.src" alt="" :data-id="item.code" @click="onJump(item)"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      //
    }
  },
  created () {
    // https://img.yzcdn.cn/upload_files/2020/03/06/Fjo43b1oFhT0wNie_VwbR1cmByU7.jpg!large.jpg
  },
  methods: {
    onJump (item) {
      location.href = item.url
    }
  }
}
</script>

<style lang="scss">
.page-default-banner {
  .van-swipe__indicator {
    width: 12px;
    height: 12px;
    margin-right: 12px;
  }
}
</style>
<style lang="scss" scoped="scoped">
.page-default-banner {
  .my-swipe {
    height: 400px;
  }
  img {
    height: 400px;
  }
}
</style>
