var webpackCommon = require('./webpack.common.js')
const merge = require('webpack-merge')
module.exports =  merge(webpackCommon,{
  mode: 'development', // 当mode值为'production'时，webpack-dev-server 变动刷新反应很慢
  devtool:'cheap-module-eval-source-map',
  devServer:{}
})