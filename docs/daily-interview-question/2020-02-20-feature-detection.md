---
title: Feature detecion 2020-2-20
---

## 请指出浏览器特性检测，特性推断和浏览器 UA 字符串嗅探的区别？

特性推断一般用于已知特性，但未知浏览器是否支持的场景下使用。例如 [polyfill](https://www.polyfill.io/)，[modernizr](https://modernizr.com/docs/#what-is-feature-detection)

UA 嗅探用于区别不同浏览器场景下的区分。例如 [ua-parser](https://github.com/faisalman/ua-parser-js)

例

```js
// 特性检查
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function(s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
}
// UA 嗅探
if (isWechat) {
  // do something
}
```

### 参考

- [https://modernizr.com/docs/#what-is-feature-detection](https://modernizr.com/docs/#what-is-feature-detection)
