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
      <!--<iframe src="http://172.32.30.167:3001/shop_admin/html/demo.html" width="" height=""></iframe>-->
      <!--<img style="width: 200px;height: 200px;" src="https://element.faas.ele.me/98b0a907-2796-4a0c-a2e9-d02c1f923f01" alt="" />-->
      <div>
        <span>商品标题</span><input type="text" v-model="send.goodtitle"/><br />
        <span>展示价格</span><input type="text" v-model="send.goodShowPrice"/><br />
        <span>展示原价</span><input type="text" v-model="send.goodOriginPrice"/><br />
        <span>轮播图片</span><br /><input ref="file" type="file" placeholder="添加图片" @change="selectImg($event)"/>
        <div>
          <img style="width: 50px;height: 80px;" v-for="(item,index) in send.goodSwipes" :key="index" :src="item.url" alt="" />
        </div>
        <span>列表展示图片</span><br />
        <span>详情图片</span><br /><textarea name="" rows="" cols="" v-model="send.goodDetailPics"></textarea>
        <span>sku配置</span><br /><button @click="addParams">新加属性+</button>
        <div class="params">
          <div class="params-item" v-for="(item,index) in params" :key="index">
            <div><span>属性名：</span><input type="text" /></div>
            <div>
              <span>属性值：</span>
              <div>
                <input type="text" placeholder="值"/>
                <img src="" alt="" />
                <input type="file" />
              </div>
            </div>
            <span @click="addNewValue">增加</span>
          </div>
        </div>
        <div class="params-goods"></div>
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
      goodShow: false, // 添加商品弹窗
      send: {
        goodtitle: '全棉格子水洗棉四件套床品 纯棉被套纯色床单被单床上用品床笠款', // 添加商品-标题
        goodShowPrice: '220-270',
        goodOriginPrice: '460-510',
        goodSwipes: [], // 默认第一张为展示图片-列表中
        goodDetailPics: '//img.alicdn.com/imgextra/i4/441425162/O1CN01R6IJyI1o0F2ssx412_!!441425162.jpg_640x0q80_.webp,//img.alicdn.com/imgextra/i3/441425162/O1CN01a0C55V1o0F2qHEzSN_!!441425162.jpg_640x0q80_.webp,//img.alicdn.com/imgextra/i3/441425162/O1CN01H8O5cu1o0F2rexhCy_!!441425162.jpg_640x0q80_.webp,//img.alicdn.com/imgextra/i4/441425162/O1CN01a8Whnn1o0F2tm4c9c_!!441425162.jpg_640x0q80_.webp,//img.alicdn.com/imgextra/i4/441425162/O1CN01YKflEn1o0F2qxnyuC_!!441425162.jpg_640x0q80_.webp', // ,号隔开
        skus: [
          {
            pid: 1,
            pname: '款式',
            values: [
              { vid: 601, imgUrl: '', vname: '床单式' },
              { vid: 602, imgUrl: '', vname: '床笠式' }
            ]
          },
          {
            pid: 2,
            pname: '颜色分类',
            values: [
              { vid: 701, imgUrl: 'http://img.alicdn.com/imgextra/i2/1614112418/TB2Jb7_cHArBKNjSZFLXXc_dVXa_!!1614112418.jpg_120x120q50s150.jpg', vname: '帛咖-L' },
              { vid: 702, imgUrl: 'http://img.alicdn.com/imgextra/i4/1614112418/TB20JJacVkoBKNjSZFEXXbrEVXa_!!1614112418.jpg_120x120q50s150.jpg', vname: '荷粉-L' },
              { vid: 703, imgUrl: 'http://img.alicdn.com/imgextra/i4/1614112418/TB2FtRIkFuWBuNjSspnXXX1NVXa_!!1614112418.jpg_120x120q50s150.jpg', vname: '静蓝-L' },
              { vid: 704, imgUrl: 'http://img.alicdn.com/imgextra/i3/1614112418/TB2m0LEkTJYBeNjy1zeXXahzVXa_!!1614112418.jpg_120x120q50s150.jpg', vname: '裸色-L' }
            ]
          }
        ],
        goodlist: [
          //
        ]
      },
      params: []
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
      this.$api['adDefaul/add'](this.send).then((res) => {
        console.log(res)
      })
    },
    selectImg (e) {
      let formData = new FormData()
      formData.append('file', e.target.files[0])
      formData.append('name', 'default')
      formData.append('age', 18)
      this.$api['adCom/uploadimg'](formData).then((res) => {
        this.send.goodSwipes.push(res)
      })
    },
    // 添加新属性
    addParams () {
      this.params.push({
        name: '',
        values: [{
          imgUrl: '',
          name: ''
        }]
      })
    },
    // 添加新属性值
    addNewValue () {
      //
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
