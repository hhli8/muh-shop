<template>
  <div>
    <p>测试下适配</p>
    <div class="item" v-for="(item, index) in data" :key="index">
      <div class="item-con" v-if="item.type==='input'">
        <div class="con">
          <div class="name">{{item.name}}</div>
          <input class="con-input" type="text" v-model="item.send" :placeholder="item.placeholder" @input="listenInput($event, item)" @blur="inputBlur(item)" @focus="viewFeed($event)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          type: 'input',
          name: 'Your first name',
          send: '',
          placeholder: 'Please enter your frist name'
        }
      ]
    }
  },
  mounted () {
    this.testAsync()
    console.log('outer')
  },
  methods: {
    listenInput () {
      //
    },
    inputBlur () {
      //
    },
    viewFeed () {
      //
    },
    async testAsync () {
      console.log(111111111)
      var x = await this.getDevice()
      console.log(x)
      console.log(2222222222)
    },
    getDevice () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(8888)
        }, 3000)
      })
    },
    async test1 () {
      for (let index = 0; index < 3; index++) {
        console.log('async ' + index)
      }
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.item {
  font-family: Roboto-Regular,Roboto;
  font-weight: 400;
  text-align: left;
  background: #fff;
  padding: 0 30px;
  &-con {
    padding: 30px 0 20px 0;
    position: relative;
  }
  .name {
    color: #48677D;
    font-size: 28px;
    height: 32px;
    line-height: 32px;
    margin-bottom: 30px;
    font-weight: 400;
  }
  .name.err {
    color: red;
  }
  .con-input {
    width: 100%;
    height: 38px;
    line-height: 38px;
    font-size: 32px;
    color: #14181F;
    padding: 0;
  }
}
</style>
