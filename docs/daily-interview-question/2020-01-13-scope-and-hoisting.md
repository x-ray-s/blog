---
title: Scope & hositing 2020-1-13
---

# 提升 和 作用域

关于提升（hoisting) 和 作用域（scope)的几个重要的点

- 所有声明（函数和变量）会提升到包含范围（执行上下文）的顶部。
- 函数优先于变量
- 声明 声明 声明 不是赋值（assignment)

```js
// 函数提升
foo1();
function foo1() {
  console.log("function foo 1");
}

// 变量提升
console.log(a);
var a = 1;

// 函数优先
console.log(same);
var same = "variable same";
function same() {
  console.log("function same");
}
// 函数作用域
var value = "global";
function fnScope() {
  console.log(value); // undefined
  var value = "local";
  console.log(value); // 'local'
}

function fnScope1() {
  console.log(value); // 'global'
}
```

### 题目

1.下面代码输出什么？

```js
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    console.log("p1", b);
    var b = 3;
    console.log("p2", b);
  }
  inner();
}
outer();
// output ?
```

2.下面代码输出什么？[Question 19](https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions#question-19-what-will-be-the-output-of-the-following-code)

```js
var salary = "1000$";

(function() {
  console.log("Original salary was " + salary);

  var salary = "5000$";

  console.log("My New Salary " + salary);
})();
```

### 相关问题和练习

- [hositing](https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions#hoisting)

## 参考

- [作用域查找变量和引用](https://developer.mozilla.org/zh-CN/docs/Glossary/Scope)
- [变量提升](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting)
- [Demystifying JavaScript Variable Scope and Hoisting](https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/)
