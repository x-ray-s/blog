---
title: 读书笔记-你不知道的javascript(上) 第二部分
---

### 第二部分 this和对象原型

#### 第1章 关于this

关于this的误解。

#### 第2章 this全面解析

调用位置

调用位置就是函数在代码中被调用的位置。 

最重要的是要分析调用栈（就是为了到达当前执行位置所调用的所有函数）。我们关心的调用位置就是当前正在执行的函数的前一个调用中。

```javascript

function baz() {
  console.log("baz");
  bar();
}
function bar() {
  console.log("bar")
}
funciton foo() {
  // 当前调用栈是 baz -> bar -> foo
  // 因此，当前调用位置在 bar 中
  console.log("foo")
}
baz();
```

绑定规则

默认绑定

隐式绑定

调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含。

对象属性引用链中只有最顶层或者说最后一层会影响调用位置。

```javascript

function foo() {
  console.log(this.a);
}

var obj2 = {
  a: 42,
  foo: foo
};

var obj1 = {
  a: 2,
  obj2: obj2
};

obj1.obj2.foo(); // 42
```

隐式丢失

```javascript
function foo () {
  console.log(this.a);
}

var obj = {
  a:2,
  foo: foo
};

var a = 'oops, global';
// 虽然bar是obj.foo的一个引用，但是实际上，它引用的是foo函数本身，因此此时的bar()其实是一个不带任何修饰的函数调用，因此应用了默认绑定。
var bar = obj.foo;

bar();
```

```javascript
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

var a = 'oops, global';

setTimeout(obj.foo, 100);

// javascript 环境中内置的setTimeout() 函数实现和下面伪代码类似

function setTimeout(fn , delay) {
  fn(); // 调用位置
}
```

显式绑定

```javascript
function foo (something) {
  return this.a + something;
}

function bind (fn, obj) {
  return function () {
    return fn.apply(fn, arguments);
  }
}

var bar = bind(foo, obj);

var b = bar(3); //2 3
console.log(b); // 5
```
