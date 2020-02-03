<template>
  <div class="bar flex">
    <div class="bar-buy-car" @click="buycar">
      <span class="icon icon-shopping"><i v-show="count>0">{{count>99?'...':count}}</i></span>
      <div>购物车</div>
    </div>
    <div class="bar-right flex">
      <div class="r-addcar" @click="addCar">加入购物车</div>
      <div class="r-buy" @click="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  methods: {
    addCar () {
      this.$emit('toggleSkushow', {
        show: true,
        type: 'add'
      })
    },
    buy () {
      this.$emit('toggleSkushow', {
        show: true,
        type: 'buy'
      })
    },
    buycar () {
      this.$router.push({
        name: 'Shopcar'
      })
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
.bar {
  position: fixed;
  height: 100px;
  width: 100%;
  left: 0;
  bottom: 0;
  background: #fff;
  .bar-buy-car {
    width: 160px;
    box-sizing: border-box;
    border-top: 1px solid #e5e5e5;
    text-align: center;
    font-size: 18px;
    padding-top: 14px;
    color: #666;
    .icon-shopping {
      width: 44px;
      height: 44px;
      display: block;
      margin: 0 auto;
      background: url('~@/assets/img/icon-shoppingcar.png') no-repeat center;
      background-size: 100% 100%;
      margin-bottom: 6px;
      position: relative;
      i {
        position: absolute;
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #ed145b;
        color: #fff;
        font-style: normal;
        text-align: center;
        line-height: 30px;
        right: -20px;
        top: -8px;
        font-size: 20px;
      }
    }
  }
  .bar-right {
    flex: 1;
    color: #fff;
    font-size: 32px;
    text-align: center;
    line-height: 100px;
    &>div {
      flex: 1;
    }
    .r-addcar {
      background: linear-gradient(141deg,#606060,#363636);
    }
    .r-buy {
      background: linear-gradient(334deg,#9071eb,#b36feb);
    }
  }
}
</style>
