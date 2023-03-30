---
title: 解决 Chrome 禁止发送不安全的内网网络请求
---

How to fix Chrome block your insecure private network requests?

使用梅林 Clash 时公告区的提示：

> 若 Chrome 访问 YACD 面板登录失败，请将 chrome://flags/#block-insecure-private-network-requests 设置关闭(disable)

但 Chrome 版本 108 以上，删除了这个设置，[讨论](https://support.google.com/chrome/thread/190769361/chrome-flags-block-insecure-private-network-requests-setting-missing-with-108-update?hl=en)

需要 chrome://flags/#unsafely-treat-insecure-origin-as-secure 中开启设置并增加 origin
