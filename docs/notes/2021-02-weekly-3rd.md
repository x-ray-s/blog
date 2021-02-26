---
title: 2月 第三周
---

# {{$page.title}}

### 学习

不断放弃和重拾 C++

### JS

使用 `pdf-lib` 修改 pdf

使用 `qrcode.js` 的时候遇到一个兼容性问题，因为判断 `android` 版本的正则表达式问题，导致 `android 9+` 的设备上无法生成二维码，其实可以使用 `node-qrcode` 代替这个库，主要是 `node-qrcode` 的这个名字太迷惑了，其实也支持浏览器...

### TS

使用 `tsdx` 初始化项目，减少对 ts 的配置

### Chrome

最新的 `Chrome 88` 增加了二维码功能，可以卸载掉之前的插件了，还有标签分组功能，可以归类标签页了。

### HTTP

在使用微信开放平台 API 时，遇到一个上传问题，使用 `form-data` 上传文件，但是服务端拒绝，发现是 `form-data` append 方法的第三个参数问题，服务端应该是需要解析 request body 中 boundary 的 `content-type` 或 `name`，所以出现了下面错误

```json
{
  "errcode": 41005,
  "errmsg": "media data missing hint: "
}
```

但在文档中并没有标注一定需要 `filename` 这个参数。

下面是 RFC 标准的解释

https://www.ietf.org/rfc/rfc2388.txt
