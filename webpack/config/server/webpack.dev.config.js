const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const rootPath = process.cwd();
let {
  NODE_ENV, // 环境参数
  target, // 环境参数
} = process.env; // 环境参数

 
module.exports = {
  entry: {
    main: [
      // '@babel/polyfill',
      // "core-js/stable",
      // "regenerator-runtime/runtime",
      //添加编译缓存
      // "webpack/hot/poll?1000",
      path.join(process.cwd(), "/server/middleware/clientRouter/index.js")
    ]
  },
  devServer: {
    historyApiFallback: true,
    liveReload: true, // 编译之后是否自动刷新浏览器
    open: true,
    hot: true,
    writeToDisk: true, // 写入硬盘
  },
  watch: true,
  watchOptions: {
    //延迟监听时间
    aggregateTimeout: 500,
    //忽略监听文件夹
    ignored: "/node_modules/"
  },
  // context: path.join(process.cwd(), '/client'),
  devtool: "source-map",
  module: {
    rules: []
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
