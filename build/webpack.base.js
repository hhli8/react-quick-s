const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.tsx')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
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
          'style-loader',
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