<template>
  <div>
    <div class="page-shopcar">
      <!--<p>this is shopcar</p>-->
      <div class="item" v-for="(item, index) in lists" :key="index">
        <!--<div class="item-shop"><span class="iconfont">&#xe621;</span><span>{{item.shopname}}</span></div>-->
        <div class="item-good">
          <div v-for="(good, gndex) in item.goods" :key="gndex" class="good">
            <div class="good-left">
              <span class="icon-select" :class="good.selected?'act':''" @click="select(good, gndex, item, index)"></span>
              <img src="http://img.alicdn.com/imgextra/i3/1614112418/O1CN01fmdBm71TjUBQjY9y8_!!0-item_pic.jpg_640x640q80_.webp" alt="" />
            </div>
            <div class="good-right">
              <div class="title text-line2">撒大声地敖德萨多自行车这次行程中啊飒飒大爱上大沙发上阿斯蒂芬发给奥术大师大111</div>
              <div class="params">蓝色;XL</div>
              <count :price="good.price" v-model="good.count" @callback="calculate"></count>
            </div>
          </div>
        </div>
      </div>
    </div>
    <btm-nav :index="2">
      <div class="clearing">
        <span class="icon-select" :class="isAllSelected?'act':''" @click="selectAll"></span>
        <div class="clear">
          <span class="font-tag">不含运费</span><span class="total-text">合计：</span><span class="total-cash">¥{{totalPrice}}</span><span class="btn">结算<i v-show="totalCount">({{totalCount}})</i></span>
        </div>
      </div>
    </btm-nav>
  </div>
</template>

<script>
import btmNav from '@/components/nav'
import count from './components/count.vue'
import NP from 'number-precision'
export default {
  data () {
    return {
      lists: [
        {
          icon: '',
          shopname: '阿达啊as12',
          goods: [{ price: 12.22, count: 1 }]
        },
        {
          icon: '',
          shopname: 'dfgdg大幅度发的',
          goods: [{ price: 238, count: 2 }, { price: 238, count: 2 }, { price: 238, count: 2 }, { price: 238, count: 2 }, { price: 238, count: 2 }, { price: 238, count: 2 }, { price: 238, count: 2 }, { price: 238, count: 2 }, { price: 238, count: 2 }, { price: 238, count: 2 }]
        }
      ],
      isAllSelected: false,
      totalPrice: 0,
      totalCount: 0
    }
  },
  components: {
    btmNav,
    count
  },
  created () {
    //
  },
  methods: {
    selectAll () {
      this.isAllSelected = !this.isAllSelected
      this.totalPrice = 0
      this.totalCount = 0
      this.lists.forEach((item) => {
        item.goods.forEach((good) => {
          good.selected = this.isAllSelected
          if (this.isAllSelected) {
            this.totalPrice += good.price * good.count
            this.totalCount++
          }
        })
      })
      this.totalPrice = NP.strip(this.totalPrice)
    },
    select (good, sindex, item, findex) {
      if (good.selected) {
        good.selected = false
        this.isAllSelected = false
      } else {
        let target = JSON.parse(JSON.stringify(item))
        target.goods[sindex].selected = true
        this.$set(this.lists, findex, target)
      }
      this.calculate()
    },
    calculate () {
      let totalTag = 0
      this.totalPrice = 0
      this.totalCount = 0
      this.lists.forEach((item) => {
        item.goods.forEach((good) => {
          totalTag++
          if (good.selected) {
            this.totalPrice += good.price * good.count
            this.totalCount++
          }
        })
      })
      if (totalTag === this.totalCount) this.isAllSelected = true
      this.totalPrice = NP.strip(this.totalPrice)
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.page-shopcar {
  padding: 20px 18px 168px 18px;
    .item {
      background: #fff;
      margin-bottom: 20px;
      border-radius: 20px;
      padding: 20px 15px 20px 15px;
      &-shop {
        height: 60px;
        margin-bottom: 10px;
        font-size: 28px;
        color: #666;
        display: flex;
        align-items: center;
        .iconfont {
          color: #ED145B;
          font-size: 28px;
          margin-right: 15px;
        }
      }
      .good {
        display: flex;
        margin-bottom: 26px;
        &-left {
          display: flex;
          /*align-items: center;*/
          margin-right: 12px;
          .icon-select {
            margin-right: 12px;
            margin-top: 59px;
          }
          img {
            width: 150px;
            height: 150px;
          }
        }
        &-right {
          flex: 1;
          .title {
            color: #333;
            margin-bottom: 10px;
            font-size: 26px;
            line-height: 36px;
          }
          .params {
            font-size: 22px;
            color: #999;
            height: 30px;
            line-height: 30px;
            margin-bottom: 30px;
          }
        }
      }
      .good:last-child {
        margin-bottom: 0;
      }
    }
}
.clearing {
  height: 88px;
  border-top: 1px solid #BDBDBD;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  .clear {
    .font-tag {
      color: #999;
      font-size: 20px;
      margin-right: 10px;
    }
    .total-text {
      color: #333;
      font-size: 28px;
    }
    .total-cash {
      color: #ED145B;
      font-size: 24px;
      font-weight: bold;
    }
    .btn {
      display: inline-block;
      height: 60px;
      line-height: 60px;
      /*padding: 0 30px;*/
      width: 180px;
      text-align: center;
      background: #F54B78;
      color: #fff;
      font-size: 30px;
      border-radius: 30px;
      margin-left: 20px;
      i {
        font-style: normal;
      }
    }
  }
}
.icon-select {
  width: 32px;
  height: 32px;
  /*border-radius: 50%;
  border: 2px solid #999;*/
  display: inline-block;
  box-sizing: border-box;
  background: url('~@/assets/img/icon-unselected.png') no-repeat center;
  background-size: 100% 100%;
}
.icon-select.act {
  background: url('~@/assets/img/icon-selected.png') no-repeat center;
  background-size: 100% 100%;
}
</style>
