const path = require('path')
const webpack = require('webpack')
const Merge = require('webpack-merge')
const common = require('./webpack.base.js')

module.exports = Merge.merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    hotOnly: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENVH': JSON.stringify('development')
    })
  ]
})