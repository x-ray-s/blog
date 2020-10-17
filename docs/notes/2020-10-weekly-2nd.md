---
title: 10月 第二周
---

# {{$page.title}}

### Electron

本周替换了 `vue-electron` 维护的 `vuex-electron`，因为这个不更新，并且 blacklist 参数不生效。替换的库为 [MaverickMartyn/vuex-electron](https://github.com/MaverickMartyn/vuex-electron)

### Node

在使用打包程序处理环境变量时候，避免通过方括号访问。

e.g `process.env['NODE_ENV']` 是无法在编译后替换为字符串。
