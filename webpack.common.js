var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var { resolve, getEntries, getHtmlWebpackPlugins } = require('./webpack.until.js')

module.exports = {
  entry: {
    ...getEntries()
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    }
  },
  output: {
    path: resolve('dist'),
    filename: 'static/js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss|sass$/,
        use: [
          {
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: "sass-loader" // 将 Sass 编译成 CSS
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(), // 启用 热更新
    ...getHtmlWebpackPlugins()

  ],
}