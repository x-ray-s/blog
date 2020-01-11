---
title: 2020-1-9
---

> What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?

当使用 `typeof bar === "object"` 去判断 bar 是否是一个 object，潜在的陷阱是是什么？如何避免这个陷阱？

```js
// typeof operator

// type of some standard objects
console.log(typeof {} === "object");
console.log(typeof [3, 4] === "object");
console.log(typeof new Date() === "object");
console.log(typeof /x/ === "object");
console.log(typeof JSON === "object");
console.log(typeof Math === "object");

// this is historical bug, it should return 'null'
console.log(typeof null === "object");

// all true
```

只要跟你感觉有偏差的，都是潜在的陷阱。

那么如何判断一个对象的类型（Determine Type of Object）？

## 使用 toString() 检测对象类型

`Reflect.apply ( Object.prototype.toString , obj, [] )`

或

`Object.prototype.toString.call ( obj )`

获取的类型是下列之一：

- "[object Undefined]"
- "[object Null]"
- "[object Array]"
- "[object String]"
- "[object Arguments]"
- "[object Function]"
- "[object Error]"
- "[object Boolean]"
- "[object Number]"
- "[object Date]"
- "[object RegExp]"
- "[object Object]"
- "[object JSON]"
- "[object Set]"
- "[object Map]"
- "[object GeneratorFunction]"
- "[object Generator]"

注意，如果一个对象具有一个 `Symbol.toStringTag` 属性，并且值为一个字符串 "tag"，那么它的类型为 `[object tag]`

```js
let uu = {};
uu[Symbol.toStringTag] = "xyz";
console.log(Object.prototype.toString.call(uu) === "[object xyz]"); // true
```

### 看下第二道题

```js
typeof typeof 1;
```

AST:

-- ExpressionStatement<br>
----- UnaryExpression (typeof)<br>
-------- UnaryExpression (typeof)<br>
----------- Literal (1)<br>

**Therefore ↓**

```
typeof (typeof 1);
typeof "number"
"string"
```

[https://runkit.com/kennywho/object-types](https://runkit.com/kennywho/object-types)

## 参考

- [`Object.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
- [`Symbol.toStringTag`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)
- [Object Types](http://xahlee.info/js/javascript_whats_object.html)
- [`typeof 运算符`](https://www.w3.org/html/ig/zh/wiki/ES5/%E8%A1%A8%E8%BE%BE%E5%BC%8F#typeof_.E8.BF.90.E7.AE.97.E7.AC.A6)
