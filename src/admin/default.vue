<template>
  <div class="page-admin">
    <p>default</p>
    <div>
      <p>banner管理</p>
      <div><button style="cursor: pointer;background: #0069D6; color:#fff;" @click="addBanner">添加</button></div>
      <table>
        <tr>
          <td>序号</td>
          <td>商品id</td>
          <td>图片(地址)</td>
          <td>描述</td>
          <td>操作</td>
        </tr>
        <tr></tr>
      </table>
    </div>
    <div>
      <p>首页商品管理</p>
    </div>
    <muh-popup v-model="bannershow">
      <div>
        888
      </div>
      <div>
        <button @click="bannershow=false">取消</button>   <button @click="confirmAdd">确定</button>
      </div>
    </muh-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannershow: false
    }
  },
  methods: {
    addBanner () {
      this.bannershow = true
    },
    confirmAdd () {
      //
    }
  }
}
</script>

<style>
.page-admin {
  font-size: 6px;
}
</style>
