<template>
  <div class="container">
    <div class="sidebar">side-bar</div>
    <div class="right">
      <div class="topbar">top-bar</div>
      <div class="content">
        <span>content</span><br /><br /><br /><br />
        <button class="btn" @click="jump">问题2</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jump () {
      this.$router.push({
        name: 'qs2'
      })
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.container {
  height: 100%;
  display: flex;
  font-size: 24PX;
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    .topbar {
      height: 60PX;
      background: green;
    }
    .content {
      flex: 1;
      text-align: center;
      padding-top: 50px;
    }
  }
  .sidebar {
    background: greenyellow;
    width: 200PX;
  }
}
.btn {
  padding: 20px;
  background: #002B7D;
  color: #fff;
  font-size: 26PX;
}
</style>
