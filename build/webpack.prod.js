const path = require('path')
const webpack = require('webpack')
const Merge = require('webpack-merge')
const common = require('./webpack.base.js')

module.exports = Merge.merge(common, {
  mode: 'production',
  output: {
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})