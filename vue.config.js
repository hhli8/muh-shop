/* const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path') */
const env = process.env
module.exports = {
	productionSourceMap: false,
  publicPath: `${env.NODE_ENV}` === 'production' ? `${env.WEBPACK_PATH}` : '/',
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
  },
  configureWebpack: config => {
  	/* console.log(process.env.NODE_ENV)
  	if (process.env.NODE_ENV === 'development') return
  	return {
  		plugins: [
  			new PrerenderSPAPlugin({
  				staticDir: path.join(__dirname, 'dist'),
		      routes: [ '/', '/mine', '/classify', '/shopcar', '/login', '/createorder', '/orderlist', '/pay', '/adresslist', '/addadress', '/credit' ],
		      renderer: new Renderer({
		        inject: {
		          foo: 'bar'
		        },
		        headless: true,
		        renderAfterDocumentEvent: 'render-event'
		      })
  			})
  		]
  	} */
  }
}
