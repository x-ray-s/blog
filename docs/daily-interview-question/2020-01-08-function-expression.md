---
title: 2020-1-8
---

下面代码中 y 的输出是什么？

```js
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
```

## 解析

`()` 操作符 以及 `if` 语句的条件判断的内容都为表达式(Expression)，所以 `f` 函数作为命名函数表达式（Named function expression)来进行 boolean 运算。所以条件语句为 `true`

> 然后函数名称将会（且只会）作为函数体（作用域内）的本地变量。

因此在 `if` 声明块中，`f` 的值为 `undefined`

[https://runkit.com/kennywho/named-function-expression]()

## 参考

- [函数表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function)
- [圆括号运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Grouping)

## 进阶

- [if statement](https://es5.github.io/#x12.5)
- [if 语句](https://www.w3.org/html/ig/zh/wiki/ES5/%E8%AF%AD%E5%8F%A5#if_.E8.AF.AD.E5.8F.A5)
