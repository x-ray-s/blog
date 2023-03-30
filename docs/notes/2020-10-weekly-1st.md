---
title: 10月 第一周
---

最近在做国外的外包项目，接触了一些国外的服务应用。

### 服务

- [hotjar](https://www.hotjar.com/) 热点图分析服务
- [intercom](https://intercom.com/) 客服支持服务
- [cloudflare CDN](https://www.cloudflare.com/zh-cn/cdn) CDN 服务

### 开发工具

- [strapi](https://strapi.io/) Node CMS
- [drawerd](https://drawerd.com/) 数据库模型工具

### 硬件

最近把 pixel 3 升级到 Android 11，发现现在通过镜像升级都不需要自己使用 `adb` 了，只要你的设备开启了 `fastboot`，通过 Chrome 浏览器[访问](https://flash.android.com/)就可以刷入镜像。详细的一些[说明](https://developers.google.com/android/images#flashtool)。

### Nuxt

#### 环境变量

要使用环境变量可以在 `nuxt.config.js` 中的 `env` 中添加。

如果想使用 `.env` 文件，需要增加`@nuxt/dotenv`，但要想支持类似 `vue-cli` 的多个环境变量文件需要自己定义逻辑。

在 `nuxt.config.js` 中使用 `.env` 的环境变量需要在顶部引入依赖 `require('dotenv').config()`
