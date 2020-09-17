const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const prod = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.tsx')
    // vendor: ['react', 'react-dom', 'react-router-dom']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: !prod ? '[name].css' : '[name].[hash].css',
      chunkFilename: !prod ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /\.module\.(scss|sass)$/,
        use: [
           {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !prod,
            },
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'config.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
      'react-dom': '@hot-loader/react-dom'
    }
  }
}