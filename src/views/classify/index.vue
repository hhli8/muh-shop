<template>
  <div class="page-classify flex">
    <div class="head">
      <div class="back iconfont" @click="onback">&#xe600;</div>
      <div class="search"><span class="iconfont">&#xe60f;</span></div>
    </div>
    <muh-classify :left-list="left" :show-key="'name'" v-model="positive">
      <div class="scroll-right" slot="right">
        <!--start<br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />sdasdasdasdasdasdas<br /><br />end-->
        <div class="kind" v-for="(kind,kindex) in rightList" :key="kindex">
          <p class="kind-title">{{kind.title}}</p>
          <div class="kind-goods">
            <div class="item" v-for="(item,index) in kind.list" :key="index">
              <img class="img" src="http://img.alicdn.com/imgextra/i3/1614112418/O1CN01fmdBm71TjUBQjY9y8_!!0-item_pic.jpg_640x640q80_.webp" alt="" />
              <div class="name">商务电脑</div>
            </div>
          </div>
        </div>
      </div>
    </muh-classify>
  </div>
</template>

<script>
export default {
  data () {
    return {
      left: [],
      positive: 0,
      rightList: []
    }
  },
  created () {
    setTimeout(() => {
      this.left = [
        { name: '精选', code: 1002 }, { name: '女装', code: 1003 }, { name: '手机', code: 1004 },
        { name: '数码', code: 1002 }, { name: '箱包', code: 1003 }, { name: '男鞋', code: 1004 },
        { name: '食品', code: 1002 }, { name: '内衣', code: 1003 }, { name: '运动', code: 1004 },
        { name: '居家百货', code: 1002 }, { name: '家装', code: 1003 }, { name: '美妆', code: 1004 },
        { name: '精选', code: 1002 }, { name: '女装', code: 1003 }, { name: '手机', code: 1004 },
        { name: '精选', code: 1002 }, { name: '女装', code: 1003 }, { name: '生鲜', code: 1004 }
      ]
      this.load(1002)
    })
  },
  watch: {
    positive () {
      this.load(this.positive)
    }
  },
  methods: {
    load (code) {
      console.log(code)
      this.rightList = [
        {
          title: '为你推荐' + code,
          list: [1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        },
        {
          title: '天猫榜单',
          list: [1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        }
      ]
    },
    onback () {
      this.back()
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.page-classify {
  height: 100vh;
  flex-direction: column;
  background: #ED145B;
  .muh-classify {
    background: #fff;
    border-radius: 30px 30px 0 0;
  }
  .head {
    padding: 15px 30px;
    display: flex;
    align-items: center;
    .back {
      margin-right: 20px;
      color: #fff;
      font-size: 36px;
    }
    .search {
      height: 60px;
      background: #F5F5F6;
      border-radius: 30px;
      flex: 1;
      position: relative;
      .iconfont {
        position: absolute;
        font-size: 36px;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
      }
    }
  }
  .scroll-right {
    background: #fff;
    padding: 30px;
    .kind {
      margin-top: 20px;
      &-title {
        color: #000;
        font-weight: 500;
        font-size: 30px;
        margin-bottom: 20px;
      }
      &-goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item {
          margin-bottom: 14px;
          .img {
            width: 150px;
            height: 150px;
          }
          .name {
            color: #333;
            font-size: 26px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
