const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path')
const env = process.env
module.exports = {
	productionSourceMap: false, // map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
  publicPath: `${env.NODE_ENV}` === 'production' ? `${env.WEBPACK_PATH}` : '/',
  // publicPath: '/',
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
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    if (process.env.REPORT) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
  configureWebpack: config => {
    return
    if (process.env.NODE_ENV === 'development') return
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: [ '/', '/classify', '/mine', '/shopcar' ],
          postProcess (renderedRoute) {
            // add CDN
            let cdnPath = process.env.WEBPACK_PATH
            renderedRoute.html = renderedRoute.html.replace(
              /(<script[^<>]*src=\")((?!http|https)[^<>\"]*)(\"[^<>]*>[^<>]*<\/script>)/ig,
             `$1${cdnPath}$2$3`
            ).replace(
              /(<link[^<>]*href=\")((?!http|https)[^<>\"]*)(\"[^<>]*>)/ig,
             `$1${cdnPath}$2$3`
            ).replace(/(<img[^<>]*src=\")((?!http|https|data:image)[^<>\"]*)(\"[^<>]*>)/ig,
            `$1${cdnPath}$2$3`)
            return renderedRoute
          },
          renderer: new Renderer({
            injectProperty: '__PRERENDER_INJECTED__',
            inject: 'prerender',
            /* inject: {
              foo: 'bar'
            }, */
            headless: false,
            renderAfterTime: 5000,
            renderAfterDocumentEvent: 'render-event'
          })
        })
      ]
    }
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
