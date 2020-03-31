<template>
  <div class="page-default-banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img :src="item.url" alt="" :data-id="item.id"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banners: [
        { url: 'https://img.yzcdn.cn/upload_files/2020/03/06/Fjo43b1oFhT0wNie_VwbR1cmByU7.jpg!large.jpg', id: '1' },
        { url: 'https://img.yzcdn.cn/upload_files/2020/03/06/Fjo43b1oFhT0wNie_VwbR1cmByU7.jpg!large.jpg', id: '2' },
        { url: 'https://img.yzcdn.cn/upload_files/2020/03/06/Fjo43b1oFhT0wNie_VwbR1cmByU7.jpg!large.jpg', id: '3' },
        { url: 'https://img.yzcdn.cn/upload_files/2020/03/06/Fjo43b1oFhT0wNie_VwbR1cmByU7.jpg!large.jpg', id: '4' },
        { url: 'https://img.yzcdn.cn/upload_files/2020/03/06/Fjo43b1oFhT0wNie_VwbR1cmByU7.jpg!large.jpg', id: '5' }
      ]
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
