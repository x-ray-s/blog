---
title: 2月 第四周
---

### HTML

Downloading resources in HTML5: `a[download]` [https://developers.google.com/web/updates/2011/08/Downloading-resources-in-HTML5-a-download]

做需求发现个问题，文件下载不了，直接打开预览了，但是知道肯定是没设置 `content-disposition` 属性，但是不知道为什么 `download` 不起作用。

看了一眼 [spec](https://html.spec.whatwg.org/dev/links.html#downloading-resources)

> In cross-origin situations, the download attribute has to be combined with the `Content-Disposition` HTTP header, specifically with the attachment disposition type, to avoid the user being warned of possibly nefarious activity. (This is to protect users from being made to download sensitive personal or confidential information without their full understanding.)

应该是如果资源跨域那么 `download` 和 `content-disposition` 必须一起使用。

### CSS

在移动端浏览器中，如果有自动隐藏地址栏功能，那么当地址栏可见时，`100vh` 会出现 Y 轴滚动条。

解决方法：

1. 使用继承
2. 使用 `window.innerHeight` 配合 `CSS Variable`

```js
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`)
```

```css
.selector {
  height: calc(var(--vh, 1vh) * 100);
}
```

参考:

- https://chanind.github.io/javascript/2019/09/28/avoid-100vh-on-mobile-web.html
- https://developers.google.com/web/fundamentals/native-hardware/fullscreen
