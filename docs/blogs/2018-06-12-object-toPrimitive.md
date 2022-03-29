---
title: js隐式转换
---

# {{$page.title}}

## 比较运算符的类型转换

+ 当比较数字和字符串时，字符串会转换成数字值。 JavaScript 尝试将数字字面量转换为数字类型的值。 首先, 一个数学上的值会从数字字面量中衍生出来，然后得到被四舍五入后的数字类型的值。
+ 如果其中一个操作数为布尔类型，那么布尔操作数如果为 true，那么会转换为 1，如果为 false，会转换为整数0，即0。
+ 如果一个对象与数字或字符串向比较，JavaScript 会尝试返回对象的默认值。操作符会尝试通过方法 valueOf 和 toString 将对象转换为其原始值（一个字符串或数字类型的值）。如果尝试转换失败，会产生一个运行时错误。
+ 注意：当且仅当与原始值比较时，对象会被转换为原始值。当两个操作数均为对象时，它们作为对象进行比较，仅当它们引用相同对象时返回 true。

## 相等运算符的类型转换

+ [Equality Table](https://dorey.github.io/JavaScript-Equality-Table/)
+ [The Abstract Equality Comparison Algorithm](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3)

## 对象的 OrdinaryToPrimitive

这里比较复杂的就是对象的类型转换，内部调用[OrdinaryToPrimitive](https://www.ecma-international.org/ecma-262/8.0/#sec-ordinarytoprimitive)

```javascript
OrdinaryToPrimitive(O, hint)
```

函数接受2个参数，_O_ 为一个对象，这里不考虑，第二个参数 _hint_，hint = 'Number' || 'String', 如果没有指定默认为 Number，只有在处理 _Date_ 对象时为 String

当转换时，js会尝试寻找和调用3个对象函数：

+ 如果 `obj[Symbol.toPrimitive](hint)` 方法存在，则调用
+ 否则如果 _hint_ 为 'String' 时，尝试调用 `obj.toString()` 和 `obj.valueOf()`
+ 否则如果 _hint_ 为 'Number' 或 'Default' 时，尝试调用 `obj.valueOf()` 和 `obj.toString()`

** 注意 如果尝试调用第一个方法后返回的为一个非原始类型(**non-primitive values**)，则会执行下一个方法

```javascript
console.log({} + {})  // "[object Object][object Object]"
console.log([] + [])  // ""
console.log({} + [])  // "[object Object]"
console.log({} + 1)  // "[object Object]1"
console.log([] + 1)  // "1"
console.log([] * 2)  // 0
```

### 参考：
+ [Object-to-Primitive-Conversions](http://www.adequatelygood.com/Object-to-Primitive-Conversions-in-JavaScript.html)
+ [object-toprimitive](https://javascript.info/object-toprimitive)
