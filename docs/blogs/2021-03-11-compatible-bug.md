---
title: 兼容性问题
---

# {{$page.title}}

本周不知道经历了什么，使用 `prefetch` 的时候，iOS 中 `img.onload` 方法会不起作用。

我们 Andorid APP webView 会将取不到的 localstorage 设置为一个 字符串的 undefined。

升级 `swr` 的时候先是遇到了 没有对 safari 9 的支持，缺少了 Object.entries 的 polyfill。在 `next` 中将依赖走 `next-babel-loader` 也遇到了一些障碍。

后来升级 `next` 到 9.5.5 发现内部的 `polyfill-module` 中有一个 `Symbol.prototype.description` 方法也有兼容性问题，并且没办法使用垫片解决，全部是 next 的内部方法，只能降低到 9.5.3。
