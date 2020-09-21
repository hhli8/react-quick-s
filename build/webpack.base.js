const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const prod = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.tsx')
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
        // include: [path.resolve(__dirname, 'static/css')],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !prod,
            },
          },
          'css-loader',
          {
            loader:'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  overrideBrowserslist: ['last 5 version', '>1%', 'ios 7']
                }),
                require('postcss-pxtorem')({
                  rootValue: 75,
                  selectorBlackList: ['weui','mu'],
                  propList: ['*']
                })
              ]
            }
          },
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