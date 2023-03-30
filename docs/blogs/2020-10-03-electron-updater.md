---
title: Electron 在 Windows 平台下的自动更新
---

准备好自动更新的静态服务

这里使用 `vue-cli-plugin-electron-builder` 脚手架，配置与 `electron-builder` 相似

```js
pluginOptions.electronBuilder.builderOptions.pulish = [
  {
    provider: 'generic',
    url: 'YOUR_STATIC_SERVER',
  },
]
```

在本地测试开发时，可以创建一个名为 `dev-app-updater.yml`， 放置在编译目录`/dist_electron/`下，在开发模式下可以检查更新。

```yml
provider: generic
url: http://127.0.0.1:5000
channel: latest
```

使用 `electron-updater` 时，如果需要手动更新，需要配置

```js
import { autoUpdater } from 'electron-updater'
autoUpdater.autoDownload = false
```

因为使用了 `vuex` 和 `vuex-electron`, 所以需要在进程之间共享状态时，可以选择用 Store，也可以选择使用 ipcMain 与 webContents 进行传递数据。
一般需要数据持久化的使用 Store, 因为是基于文件写入的。一些无状态的数据，使用进行通信比较简单，因为不需要考虑数据的初始化和重置。
