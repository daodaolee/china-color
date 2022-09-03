# 改动记录

## less

1. less-loader 不要超过 6，vue2 的内置 webpack 和 less-loader 的 webpack 版本不一致，会起冲突。
2. 全局引入 less 需要两个包：`style-resources-loader` 和 `vue-cli-plugin-style-resources-loader`，在 `vue.config.js` 中添加：

```js
pluginOptions: {
  'style-resources-loader': {
    preProcessor: 'less',
    patterns: ["src/assets/css/common.less"] //填写公共文件路径
  }
}
```
