---
title: 使用 Electron 和 TRTC 开发直播项目
---

# {{$page.title}}

为提供更好的稳定性和使用桌面端更丰富的 API，决定使用 Electron 作为桌面端直播工具，但在开发过程中遇到了一些问题，在此列举一下。

### 安装

安装 electron 速度慢，可以通过在 `.npmrc` 中增加镜像地址来解决。

```
ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/
```

### 打包

最开始使用 `electron-vue`，在 Node v12+ 的环境下会有打包错误和编译错误，并且这个库的维护情况已经 3 年左右没有更新。所以转移到 `vue-cli-plugin-electron-builder` 这个 `vue-cli` 的插件上

TRTC 的 SDK 目前不支持跨平台打包方案的，所以需要在对应的系统上打包相应的程序。

在构建脚本中要支持 node 文件的 `native-ext-loader`。

打包应用的时候需要配置额外文件的路径，参数为 `electron-builder` 的 `extraFiles` 字段。
