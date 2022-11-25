const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/baidu': {
        target: 'https://www.baidu.com',
        changeOrigin: true,
        ws:true,
        pathRewrite: {
          "^/baidu": ''
        }
      },
    }
  }
})
