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

### 开发

在使用系统权限时，如：摄像头、麦克风，如果遇到程序崩溃或者无法启动、开启设备等问题，可以检查当前启动程序是否有权限，如 iTerm2 或 VScode 的系统权限是否勾选对应的权限。

### Custom Protocol

在 Mac 平台，直接配置 `electron-builder` 的 `protocol` 字段即可，Windows 中要额外增加注册表脚本。

使用自定义协议打开应用时，可能会引起第三方包的目录错误，可以用过 `process.chdir()` 来修复错误的`process.cwd()`的路径。

```js
process.chdir(path.dirname(process.execPath))
```

关于协议的控制，直接参考代码

```js
// protocol.js
import { app } from 'electron'
import qs from 'querystring'
const isPackaged = app.isPackaged

export function getUrlFromArgv(argv) {
    const offset = isPackaged ? 1 : 2
    const url = argv.find((arg, i) => i >= offset && arg.startsWith(process.env.VUE_APP_PROTOCOL))
    return url
}

export function parseUrl2Protocol(url) {
    const _url = new URL(url)
    const { search } = _url
    let info = {
        path: _url.pathname,
        query: qs.parse(search && search.slice(1)),
        fullpath: _url.pathname + _url.search,
    }
    return info
}

// background.js
const args = []
if (!isPackaged) {
    // dist path
    args.push(path.resolve(process.argv[1]))
}
// regist protocol
app.setAsDefaultProtocolClient(process.env.VUE_APP_PROTOCOL, process.execPath, args)

const protocolPush = url => {
    if (win && url) {
        win.send('protocol-push', parseUrl2Protocol(url))
    }
}

// Mac OS
app.on('open-url', (event, urlStr) => {
    protocolPush(urlStr)
})

// Windows
// handle current instance
protocolPush(getUrlFromArgv(process.argv))
// handle second instance
app.on('second-instance', (event, argv) => {
    if (process.platform === 'win32') {
        protocolPush(getUrlFromArgv(argv))
    }
    if (win) {
        if (win.isMinimized()) {
            win.restore()
        }
        win.show()
    }
})
```

Windows 中通过 `second-instance` 事件，Mac 中通过 `open-url` 来控制打开的 URL, 同时自定义 URL 并解析 URL 参数，通过 `process.argv` 来获取 URL
