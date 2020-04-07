<template>
  <div class="count">
    <span class="price"><span class="unit">¥</span>&nbsp;{{price}}</span>
    <div class="operate">
      <span class="iconfont" @click="minus">&#xe620;</span><span class="value">{{count}}</span><span class="iconfont" @click="add">&#xe632;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: Number,
      default: 10000
    },
    count: {
      type: Number,
      default: 1
    }
  },
  model: {
    prop: 'count'
  },
  methods: {
    minus () {
      if (this.count === 1) return
      let c = this.count
      c--
      this.$emit('input', c)
      this.$emit('callback')
    },
    add () {
      if (this.count === 5) {
        this.$toast('商品最大数量为5')
        return
      }
      let c = this.count
      c++
      this.$emit('input', c)
      this.$emit('callback')
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.count {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .price {
    font-size: 26px;
    color: #ED145B;
    font-weight: bold;
  }
  .operate {
    display: flex;
    span {
      background: #f6f6f6;
      color: #333;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 24px;
    }
    .iconfont {
      width: 50px;
    }
    .value {
      width: 70px;
      margin: 0 8px;
    }
  }
}
</style>
