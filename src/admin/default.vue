<template>
  <div class="page-admin">
    <p style="text-align: center;padding: 15px;">default</p>
    <div>
      <p >banner管理</p>
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
      <div><button @click="addGood">添加</button> <button>导入</button></div>
      <table class="goods">
        <tr>
          <td>序号</td>
          <td>排序</td>
          <td>商品code</td>
          <td>商品标题</td>
          <td>价格</td>
          <td>展示图片</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item,index) in goods" :key="index">
          <td>序号</td>
          <td>1</td>
          <td>商品code</td>
          <td>商品标题</td>
          <td>展示价格</td>
          <td>展示图片</td>
          <td>
            <button>保存</button> <button>删除</button> <button>sku配置/编辑</button>
          </td>
        </tr>
      </table>
      <div>
        <span>分页</span>
        <span>1</span> <span>2</span> <span>last</span>
      </div>
    </div>
    <muh-dialog v-model="bannershow" class="bannershow">
      <div>
        12345678
      </div>
      <div class="operate">
        <button @click="bannershow=false">取消</button>   <button @click="confirmAdd">确定</button>
      </div>
    </muh-dialog>
    <muh-dialog v-model="goodShow" class="goodShow">
      <div>
        <span>商品标题</span><input type="text" /><br />
        <span>展示价格</span><input type="text" /><br />
        <span>展示原价</span><input type="text" /><br />
        <span>轮播图片</span><br />
        <span>列表展示图片</span><br />
        <span>详情图片</span><br />
        <span>sku配置</span><br />
      </div>
      <div class="operate">
        <button @click="goodShow=false">取消</button>   <button @click="confirmAddGood">确定</button>
      </div>
    </muh-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannershow: false,
      goods: [1, 2, 2, 2],
      goodShow: false
    }
  },
  methods: {
    addBanner () {
      this.bannershow = true
    },
    confirmAdd () {
      //
    },
    addGood () {
      this.goodShow = true
    },
    confirmAddGood () {
      this.$api['adDefaul/add']({
        xxx: 887
      }).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss">
.page-admin {
  font-size: 16PX;
  padding: 0 20PX;
  .bannershow {
    width: 500PX;
  }
  table.goods {
    width: 100%;
    max-height: 500PX;
    overflow: scroll;
    td {
      border: 1PX solid #ddd;
      text-align: center;
      padding: 8PX 0;
    }
  }
  .goodShow {
    .dialog-cn {
      border-radius: 10PX;
      padding: 15PX;
      input {
        border: 1PX solid #000;
      }
    }
  }
}
</style>
