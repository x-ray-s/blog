---
title: 后续参数 2020-3-9
---

### 问题 输出是什么？

```js
const add = x => x + x;

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

myFunc();
myFunc(3);
```

> 默认参数可用于后面的默认参数

### 参考

- [默认参数值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)
