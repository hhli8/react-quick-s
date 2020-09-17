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
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        common: {
          minChunks: 2,
          name: 'commons',
          chunks: 'async',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    }
//  splitChunks: {
//    cacheGroups: {
//      vendor: {
//        test: /[\\/]node_modules[\\/]/,
//        name: 'vendors',
//        chunks: 'all'
//      }
//    }
//  }
  }
})