module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 75,
            selectorBlackList: ['weui','mu'],
            propList: ['*']
          })
        ]
      }
    }
  }
}
