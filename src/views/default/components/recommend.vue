<template>
  <div class="recommend">
    <div v-for="(item, index) in list" :key="index" class="item flex" @click="goodDetail(item, index)">
      <div class="item-img"><img src="https://img.yzcdn.cn/upload_files/2020/03/30/Fl58QeuRKhMSjhGlxt-08YveU1nY.jpg!large.jpg" alt="" /></div>
      <div class="item-right">
        <p class="good-title text-line2">{{item}}正版现货【 曾国藩家书 冰鉴 挺经 全3册 】曾国藩经典文集 曾文正公家训相人术文言文原版译注白话文译文书籍 中华名人传记书局人物传记</p>
        <div class="good-tag">
          <span v-for="(tag, tagindex) in tags" :key="tagindex">{{tag}}</span>
        </div>
        <div class="good-price">
          <span class="unit">¥</span><span class="value">300.50</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {
      tags: ['直降', '爆款', '直销']
    }
  },
  methods: {
    goodDetail (item, index) {
      this.$router.push({
        name: 'Detail',
        params: { id: 11, source: 'taobao' },
        query: { x: 99 }
      })
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.recommend {
  margin-top: 20px;
  padding: 0 30px;
  box-shadow: border-box;
  background: #fff;
  .item {
    border-bottom: 1px solid #E6E6E6;
    padding: 20px 0;
    &-img {
      width: 220px;
      height: 220px;
      margin-right: 18px;
    }
    &-right {
      flex: 1;
      .good-title {
        font-size: 28px;
        line-height: 36px;
        font-weight: 400;
        color: #333;
        padding-top: 10px;
        margin-bottom: 28px;
      }
      .good-tag {
        margin-bottom: 20px;
        span {
          display: inline-block;
          /*background: #F54B78;*/
          background: rgba(245,75,120,0.1);
          color: #ED145B;
          font-size: 20px;
          padding: 2px 6px;
          border-radius: 6px;
          margin-right: 12px;
        }
      }
      .good-price {
        color: #ED145B;
        /*font-family: sans-serif;*/
        font-size: 28px;
        font-weight: 500;
        vertical-align: bottom;
        span {
          display: inline-block;
        }
        .unit {
          margin-right: 4px;
          font-size: 26px;
        }
        .value {
          /*line-height: 30px;*/
        }
      }
    }
  }
}
</style>
