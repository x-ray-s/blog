---
title: function expression 2020-1-9
---

# 函数表达式

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

> 注意 :函数表达式 function expressions 不会被提升:

因此在 `if` 声明块中，`f` 的值为 `undefined`

[https://runkit.com/kennywho/named-function-expression](https://runkit.com/kennywho/named-function-expression)

### 扩展

1.下面两段代码有什么不同？[Question 17](https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions#question-17a-what-is-the-difference-between-declaring-a-function-in-the-formats-listed-below)

```js
var foo = function() {
  // Some code
};

function bar() {
  // Some code
}
```

2.哪种情况下函数定义不会提升？[Question 18](https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions#question-18-in-which-case-the-function-definition-is-not-hoisted-in-javascript)

3.下面代码输出什么?

```js
(function() {
  console.log(typeof displayFunc);
  var displayFunc = function() {
    console.log("Hi I am inside displayFunc");
  };
})();
```

4.下面代码输出什么?[Question 16](https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions#question-16-what-will-be-the-output-of-the-following-code)

```js
var foo = function bar() {
  return 12;
};
typeof bar();
```

## 参考

- [函数表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function)
- [圆括号运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Grouping)
- [`function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function)

## 相关

- [if statement - en](https://es5.github.io/#x12.5)
- [if 语句 - cn](https://www.w3.org/html/ig/zh/wiki/ES5/%E8%AF%AD%E5%8F%A5#if_.E8.AF.AD.E5.8F.A5)
