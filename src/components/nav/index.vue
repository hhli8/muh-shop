<template>
  <div class="tabBar-wrap">
    <nav>
      <div>首页</div>
      <div>
        <router-link :to="{name: 'Classify'}">分类</router-link>
      </div>
      <div>
        <router-link :to="{name: 'Shopcar'}">购物车</router-link>
      </div>
      <div>
        <router-link :to="{name: 'Mine'}">个人</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav: []
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
.tabBar-wrap {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
}
nav {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #d9d9d9;
  height: 80px;
}
</style>
