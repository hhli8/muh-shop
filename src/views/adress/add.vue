<template>
  <div class="page-add-adr">
    <div class="warn">请填写详细的收货地址，否则无法进行派送</div>
    <div class="form">
      <div v-for="(item,index) in formData" :key="index" class="item flex align-items-center" :class="item.kind">
        <span class="name">* {{item.name}}</span>
        <div class="item-rt">
          <input v-if="item.kind==='input'" :type="item.type || 'text'" :placeholder="item.plce||'请输入'" v-model="item.key"/>
          <div v-else-if="item.kind==='picker'" @click="onPick">{{adress}}</div>
          <!--<textarea v-else-if="item.kind==='textarea'" name="" rows="" cols="" :placeholder="item.plce||'请输入'"></textarea>-->
        </div>
      </div>
      <div class="item flex align-items-center flex-between">
        <span class="name"><span style="visibility: hidden;">*</span> 设为默认</span>
        <muh-button :type="'outside'" v-model="isdefault"></muh-button>
      </div>
    </div>
    <div class="saveadr" @click="save">保存</div>
    <muh-popup v-model="dataPicker" :async="true">
      <muh-jdpicker
        :item-style="itemstyle"
        :item-actstyle="itemactStyle"
        @result="getResult"
        :initValue="initValue"
        :columns="columns">
      </muh-jdpicker>
      <!--<button @click="dateOk">确定</button>-->
    </muh-popup>
  </div>
</template>

<script>
import City from './city.js'
export default {
  data () {
    return {
      adress: '',
      adrArr: [],
      formData: [
        { ckey: 'cereiver', key: '', name: '收件人', kind: 'input', plce: '' },
        { ckey: 'phone', key: '', name: '手机号码', kind: 'input', type: 'number', plce: '' },
        { ckey: 'adress', key: '', name: '省市区', kind: 'picker', plce: '' },
        { ckey: 'detailAdress', key: '', name: '详细地址', kind: 'input', plce: '小区门牌等详细地址' }
      ],
      isdefault: false,
      dataPicker: false, // 选择省市区弹窗显示
      itemstyle: '', // picker样式
      itemactStyle: '', // 选中的样式
      initValue: [], // 默认值
      columns: [] // 值列表
    }
  },
  created () {
    this.getAdr()
  },
  mounted () {
    //
  },
  methods: {
    getAdr (fun) {
      var that = this
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'http://api.map.baidu.com/getscript?v=2.0&ak=HbUVYMUg6PwbOnXkztdgSQlQ&services=&t=20190123111209'
      var head = document.getElementsByTagName('head').item(0)
      head.appendChild(script)
      /* eslint-disable */
      script.onload = () => {
        var geolocation = new BMap.Geolocation()
        geolocation.getCurrentPosition(function (r) {
          if (this.getStatus() === BMAP_STATUS_SUCCESS) {
            var point = new BMap.Point(r.point.lng, r.point.lat)
            var myGeo = new BMap.Geocoder()
            myGeo.getLocation(point, function (result) {      
              if (result) {
                var adr = result.addressComponents
                that.adrArr = [adr.province, adr.city, adr.district]
                that.adress = adr.province + adr.city + adr.district
              }      
            })
          }      
        })
      }
      /* eslint-disable */
    },
    save () {
      let send = {
        cereiver: this.formData[0].key,
        phone: this.formData[1].key,
        adress: this.initValue,
        detailAdress: this.formData[3].key,
        isdefault: this.isdefault
      }
      console.log(send)
      this.$router.back()
    },
    onPick () {
      this.itemstyle = ''
      this.itemactStyle = 'color: #ED145B;'
      this.columns = City
      this.initValue = this.adrArr // 优化-无法匹配时默认没有初始值
      this.dataPicker = true
    },
    getResult (res) {
      this.initValue = []
      this.adress = ''
      res.forEach((item) => {
        this.adress += item.name
        this.initValue.push(item.name)
      })
      this.dataPicker = false
    },
    dateOk () {
      //
    }
  }
}
</script>

<style lang="scss" scoped="scoped" src="./add.scss">
</style>
<style scoped="scoped">
.page-add-adr /deep/ .switch-track-outside {
  width: 62px;
  height: 26px;
  border-radius: 24px;
  margin: 2px 4px;
}
.page-add-adr /deep/ .switch-track-outside .handle {
  width: 30px;
  height: 30px;
  left: -4px;
}
.page-add-adr /deep/ .switch-track-outside.on .handle {
  left: 36px;
}
</style>
<style scoped="scoped">
.page-add-adr /deep/ .p-select span.act, .page-add-adr /deep/ .p-select span.warn {
  color: #ED145B;
}
.page-add-adr /deep/ .scroll-con .listbox .list-item {
  height: 60px;
  line-height: 60px;
}
</style>
