---
title: 2020-2-13
---

# Prototype Chain

```js
Object.prototype.name = 'Kenny'
Function.prototype.name = 'kennywho'
function Developer() {

}
const iam = new Developer()
console.log(iam.name)
console.log(1..name)
console.log(1.name)
// Kenny
// Kenny
// Uncaught SyntaxError: Invalid or unexpected token
```

## 解析

`iam.name` 的查找过程

```js
// name 是 iam 的自身属性吗？不是，那看看它的原型上有没有
// name 是 iam.[[Prototype]] (iam.__proto__) 的属性吗？不是，那看看它的原型上有没有
// iam.[[Prototype]].[[Prototype]] (iam.__proto__.__proto__) 为 name，停止搜索

// Developer.prototype.__proto__ 通过 Object.prototype 继承了属性 name
```

`1..name` 的查找过程

```js
// 1. 被解析成 Number，
// 1..__proto__ 指向 Number.prototype
// Number.prototype 的父级为 Object.prototype
```

`1.name`

> 如果对数字字面量使用方法，并且数字文字没有指数且没有小数点，请在方法调用之前的点之前留出空格，以防止点被解释为小数点。

### 参考

- [继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Prototype and Inheritance](http://xahlee.info/js/js_object_prototype_inheritance.html)
- [属性访问器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
- [Number.prototype](http://xahlee.info/js/js_Number.prototype.html)
