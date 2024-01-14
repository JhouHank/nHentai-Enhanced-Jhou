const { resolve } = require('path')
// 使用 webpack-userscript 插件來生成一個用於瀏覽器腳本的打包文件。
const WebpackUserscript = require('webpack-userscript')

module.exports = {
  // 設定 Webpack 的模式為生產模式
  mode: 'production',
  // 指定入口文件
  entry: './src/main.js',
  // 配置打包後的輸出文件的路徑和名稱
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'app.js',
    clean: true,
  },
  module: {},
  plugins: [
    // 使用 webpack-userscript 插件，並通過這個插件的配置來生成用於瀏覽器的userscript
    new WebpackUserscript({
      // https://cowsay.blog/post/431d1mdg/
      headers: {
        name: 'nHentai-Enhanced-Jhou',
        namespace: 'https://github.com/JhouHank',
        license: 'MIT',
        match: 'https://nhentai.net/*',
        // 指定腳本的權限，這裡是 none，表示沒有特殊權限
        grant: ['none'],
        require: [
          // 就JQ
          'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js',
          // 用於處理複製到剪貼板
          'https://cdn.jsdelivr.net/npm/clipboard@2.0.8/dist/clipboard.min.js',
          // 用於在網頁上顯示通知消息
          'https://cdn.jsdelivr.net/npm/notyf@3.9.0/notyf.min.js',
          // ?
          'https://cdn.jsdelivr.net/gh/821938089/finder@2.0.0.1/finder.js',
        ],
      },
      metajs: false,
      pretty: true,
    }),
  ],
  optimization: {
    // 表示啟用程式碼壓縮以減小文件大小
    minimize: true, // for debug
  },
}
