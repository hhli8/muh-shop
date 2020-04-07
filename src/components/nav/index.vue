<template>
  <div class="tabBar-wrap">
    <slot></slot>
    <nav>
      <div v-for="(item, i) in nav" :key="i" class="item" :class="i===index?'act':''" @click="jump(item, i)">
        <span class="iconfont" v-html="item.icon"></span>
        <div class="name">{{item.name}}</div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      nav: [
        { name: '首页', icon: '&#xe621;', linkname: 'Default' },
        { name: '分类', icon: '&#xe61e;', linkname: 'Classify' },
        { name: '购物车', icon: '&#xe602;', linkname: 'Shopcar' },
        { name: '我的', icon: '&#xe7ae;', linkname: 'Mine' }
      ]
    }
  },
  methods: {
    jump (item, i) {
      if (i === this.index) return
      this.$router.push({
        name: item.linkname
      })
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
  background: #fff;
  z-index: 2000;
}
nav {
  display: flex;
  justify-content: space-around;
  height: 80px;
  box-shadow: 0 8px 15px 10px rgba(0, 0, 0, 0.06);
  .item {
    flex: 1;
    text-align: center;
    .iconfont {
      font-size: 36px;
      display: block;
      margin-top: 6px;
    }
    .name {
      font-size: 20px;
    }
  }
  .item.act {
    color: #ED145B;
  }
}
</style>
