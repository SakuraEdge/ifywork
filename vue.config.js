const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        target:'http://127.0.0.1:8081/', //后台接口地址
        ws:true, //如果要代理 websockets，配置这个参数
        secure:false,     //如果是https接口，需要配置这个参数
        changeOrigin:true, //是否跨域
        disableHostCheck: true,
        port: 8080,//端口号
        https: false,//是否开启协议名,如果开启会发出警告
        pathRewrite:{         //重写路径
         '^/api':''
      }
}
}
}
})


