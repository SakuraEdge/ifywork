const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        target:'http://127.0.0.1:8081/servletdemo', //后台接口地址
        ws:true, //如果要代理 websockets，配置这个参数
        secure:false,     //如果是https接口，需要配置这个参数
        changeOrigin:true, //是否跨域
        pathRewrite:{         //重写路径
         '^/api':''
      }
}
}
}
})

const webpack = require('webpack')

module.exports = {
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }])
  }
}
