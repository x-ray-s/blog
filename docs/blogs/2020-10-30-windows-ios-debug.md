---
title: 使用 Windows 平台调试 iPhone 设备中的网页
---

# {{$page.title}}

首先需要安装 iTunes，为了获取到 iPhone 的 USB 驱动程序。

然后安装 `ios-webkit-debug-proxy`，具体过程见[详情](https://github.com/google/ios-webkit-debug-proxy)

但最新的 Chrome 版本已经无法正常与其工作，无法正常的显示界面。所以 `NPM` 安装 [`remotedebug-ios-webkit-adapter`](https://github.com/RemoteDebug/remotedebug-ios-webkit-adapter).

1. 在 iPhone 中依次 设置 -> Safari 浏览器 —> 高级 -> Web 检查器 开启
2. 连接 iPhone
3. 执行

```shell
remotedebug_ios_webkit_adapter --port=9000
```

4. 打开调试页面
5. 访问 `chrome://inspect/#devices` 在 `Discover network targets` 中添加 9000 端口的 host. 然后在 Remote Target 中找到设备。
