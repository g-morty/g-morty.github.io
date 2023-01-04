const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api/baidu': {
        target: 'https://www.baidu.com/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api/baidu": ''
        }
      },
      '/api': {
        target: 'http://127.0.0.1:20080/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ''
        }
      },
    }
  }
})
