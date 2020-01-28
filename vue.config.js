module.exports = {
  publicPath: '/',
  /* devServer: {
    proxy: {
      '/touch': {
        target: 'https://3g.163.com',
        changeOrigin: true,
        ws: true,
        secure: false, // https?
        pathRewrite: {
          '^/touch': ''
        }
      }
    }
  }, */
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
