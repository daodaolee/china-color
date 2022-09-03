const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const resolve = dir => {
  return path.join(__dirname, dir);
}

module.exports = {
  // 基础路径
  publicPath: './',
  // 输出目录
  outputDir: process.env.outputDir,
  // 资源目录
  // assetsDir: "static",
  productionSourceMap: false,
  // webpack 配置
  chainWebpack: config => {
    // 目录命名
    config.resolve.alias.
      set('@$', resolve('src')).
      set('assets', resolve('src/assets')).
      set('components', resolve('src/components')).
      set('utils', resolve('src/utils'));
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'development') {
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true
        })
      );
      //gzip压缩
      const productionGzipExtensions = ['html', 'js', 'css'];
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240, // 只有大小大于该值的资源会被处理 10240
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 删除原文件
        })
      );
    }
  }
}
