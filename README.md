# react-quick-s
create cli

1 搭建cli，使用
2 react+webpack4+typescript 单页面
3 打包

"devDependencies": {
  "@commitlint/cli": "^11.0.0", // git提交规范限制
  "husky": "^4.3.0", // git提交规范限制
  
  "@babel/core": "^7.0.0", // js
  "@babel/plugin-transform-runtime": "^7.11.5", // js
  "@babel/preset-env": "^7.11.5", // js
  "babel-loader": "^8.1.0", // js
  
  "optimize-css-assets-webpack-plugin": "^5.0.4", // 剥离css从js
  "postcss-safe-parser": "^4.0.2", // css
  
  "@types/react": "^16.9.49", // ts
  "@types/react-dom": "^16.9.8", // ts
  "@types/react-router-dom": "^5.1.5",
  "awesome-typescript-loader": "^5.2.1", // ts
  "typescript": "^4.0.2", // ts
  "cross-env": "^7.0.2", // 环境工具
  "css-loader": "^4.3.0",
  "node-sass": "^4.14.1",
  "sass-loader": "^10.0.2",
  "style-loader": "^1.2.1",
  "mini-css-extract-plugin": "^0.11.2", // 剥离css
  "clean-webpack-plugin": "^3.0.0", // 清除
  "html-webpack-plugin": "^4.4.1", // 模板
  "webpack": "^4.44.1", // 基础
  "webpack-cli": "^3.3.12", // 基础
  "webpack-dev-server": "^3.11.0", // 服务
  "webpack-merge": "^5.1.4", // 共用
  "@hot-loader/react-dom": "^16.13.0+4.12.20", // 下
  "react-hot-loader": "^4.12.21" // 享受 HMR 带来的开发便利，但是又不想丢失 component state
}
"dependencies": {
  "react": "^16.13.1",
  "react-dom": "^16.13.1",
  "react-router-dom": "^5.2.0"
}

chunkhash与hash区别
hash是compilation对象计算所得，而不是具体的项目文件计算所得;
chunkhash是根据具体模块文件的内容计算所得的hash值，所以某个文件的改动只会影响它本身的hash指纹，不会影响其他文件。

chunkhash与hot冲突的原因
？
chunkhash只能用在生产环境不能用在开发环境，去掉热更新

import * as xx 与import xx的区别 https://blog.csdn.net/qq_31967569/article/details/82461499
前者为集合成对象导出，命名为xx,后者非default 需要{}引入
module.exports = {
  print: function() {
    console.log(12345)
  },
  sd: () => {
    console.log(123456)
  }
} node写法
export function add () {
  console.log('add')
}
export function add2 () {
  console.log('add2')
}
const m = 100
export default m // js写法
引用
import * as All from './utils.js'
import m from './utils.js'
console.log(All, m)

React Hot Loader 的原理
https://zhuanlan.zhihu.com/p/34193549

React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work.
alias: {
  'react-dom': '@hot-loader/react-dom'
}
