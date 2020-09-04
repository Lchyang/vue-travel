const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('styles', path.join(__dirname, './src/assets/styles'))
      .set('@', path.join(__dirname, './src/'))
      .set('common', path.join(__dirname, './src/common'))
  },
  devServer: {
    // 代理
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
