<template>
  <div>
    <muh-popup v-model="popupShow">
      <button @click="popupShow=false">关闭</button>
      <div>asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />asd1231<br />qwdsads<br />asdas<br />end</div>
    </muh-popup>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      popupShow: false
    }
  },
  watch: {
    show (val) {
      if (val) {
        this.popupShow = val
      } else {
        this.popupShow = false
      }
    }
  }
}
</script>

<style lang="scss">
.muh-popup {
  max-height: 60% !important;
}
</style>
