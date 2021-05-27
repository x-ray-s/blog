---
title: 4月 第三周
---

# {{$page.title}}

### Node

`node-gyp` 可能会使用 `python`，最近更新了 Windows 系统，可能造成了 WSL 中一些软连接的失效，`python` 命令一直无法找到，开始一直以为是 zsh / base 的环境变量问题，升级了 ubuntu 和 重新安装 python 都没用，`/usr/bin` 下是有 `python3`，后来确定是软连接失效，重新 `ln -s` 建立 `python3` 到 `python` 的连接。

然后 `npm config set python YOUR_PATH` 执行配置路径

... 然而上面的猜测错了。

其实是 npm@6.14.9 升级到了 npm@7.9 可能引起 `node-gyp` 上面的问题，跟 Windows 和 WSL 无关，我在 EC2 的 ubuntu 系统中也遇到了同样问题，降低了版本解决的。

在有 `package-lock.json` 或者 `yarn.lock` 的项目下变更包版本也需要注意依赖之间的兼容影响。
