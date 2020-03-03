---
title: Array duplicator 2020-2-25
---

### 问题

如何实现下列代码：

```js
[1, 2, 3, 4, 5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]
```

```js
Array.prototype.duplicator = function() {
  return [...this, ...this];
};
```
