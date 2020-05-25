<template>
  <div class="page-adr-list flex" v-show="loadover">
    <div class="content">
      <div v-for="(item, index) in list" :key="index" class="item">
        <div class="adr-detail" @click="setSelect(item, index)">
          <div class="name-phone"><span class="adr-name">张三里</span><span class="adr-phone">1595898088{{index}}</span></div>
          <div class="adr-val">浙江省杭州市西湖区三墩沈阿士大夫阿萨</div>
          <span class="iconfont icon-modify" @click.stop="modify(item, index)">&#xe610;</span>
        </div>
        <div class='adr-operate flex flex-between align-items-center'>
          <div class="flex align-items-center " @click="setDefault(item, index)"><span class="icon-select" :class="index===0?'act':''"></span><span class="text">{{index===0?'默认地址':'设为默认'}}</span></div>
          <span class="iconfont icon-delete" @click="onDelete(index)">&#xe63d; 删除</span>
        </div>
      </div>
    </div>
    <div class="add-btn" @click='add'>添加地址</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      maxAdr: 10,
      loadover: false
    }
  },
  created () {
    setTimeout(() => {
      this.list = [
        {}, {}, {}, {}, {}, 1, 2, 3, 4, 5
      ]
      this.loadover = true
    }, 60)
  },
  methods: {
    add () {
      if (this.list.length >= this.maxAdr) {
        this.$toast('地址数量已满')
        return false
      }
      this.$router.push({
        name: 'AddAdress'
      })
    },
    onDelete (index) {
      this.list.splice(index, 1)
    },
    setDefault (item, index) {
      console.log(item, index)
    },
    modify (item, index) {
      this.$router.push({
        name: 'AddAdress'
      })
      console.log(item, index)
    },
    setSelect (item, index) {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped="scoped" src="./list.scss">
</style>
