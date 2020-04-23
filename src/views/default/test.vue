<template>
  <div>
    <input type="text" placeholder="请输入账号"/><br /><br /><br />
    <!---->
    <input type="text" placeholder="请输入密码3"/><br /><br /><br />
    <!---->
    <button>提交</button>
    <ul ref="ul"></ul>
  </div>
</template>

<script>
export default {
  name: 'Test',
  mounted () {
    /* console.time('loopTime')
    console.time('loopAndRenderTime') // ++
    let count = 100000
    const fragment = document.createDocumentFragment()
    const ul = this.$refs.ul
    for (var i = 0; i < count; i++) {
      const li = document.createElement('li')
      li.innerText = Math.floor(Math.random() * count) + ': ' + i
      fragment.appendChild(li)
    }
    ul.appendChild(fragment)
    console.timeEnd('loopTime')
    setTimeout(() => {
      console.timeEnd('loopAndRenderTime') // ++
    }) */
    //
  }
}
</script>

<style>
</style>
