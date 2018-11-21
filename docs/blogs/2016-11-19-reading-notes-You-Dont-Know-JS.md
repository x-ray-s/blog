---
title: 读书笔记-你不知道的javascript(上) 第一部分

category: javascript
---

### 第一部分 作用域和闭包

第一章 作用域是什么

作用域是一套规则，用于确定在何处以及如何查找变量（标识符）。

为了理解js的作用域，简单介绍了传统编译编译语言的编译原理，源代码在编译之前要经历分词、解析、生成三个步骤，相比而言js引擎要复杂得多。通过变量赋值的举例描述了编译过程，赋值操作会执行两个动作，首先编译器会在当前作用域中声明一个变量，然后在运行时引擎会在作用域中查找该变量，如果能够找到就会对他赋值。

引擎为变量进行查询操作，LHS查询是试图找到变量的容器本身，从而可以对其赋值，RHS查询是查找并取得某个变量的值。

概念上最好将其理解为“赋值操作的目标是谁(LHS)”以及“谁是赋值操作的源头(RHS)”。

作用域链：引擎从当前的执行作用于开始查找变量，如果找不到，就向上一级继续查找。当抵达最外层的全局作用域时，无论找到还是没找到，查找过程都会停止。

RHS查询时无法找到该变量，引擎就会抛出ReferenceError。引擎进行LHS查询时如果在顶层中也无法找到目标变量，全局作用域中就会创建一个具有该名称的变量，并将其还给引擎。如果RHS找到变量，但对变量进行了不合理的操作，引擎会抛出TypeError.

了解RHS与LHS的区别，很容易的理解下面的代码异常

```javascript
function foo () {
  b = 3; //LHS 
  console.log(a) //RHS
}
foo()
```

第二章 词法作用域

词法作用域是由你在写代码时将变量和块作用域写在哪里决定的，因此当词法分析器处理代码时会保持作用域不变。

作用域查找会在找到第一个匹配的标识符时停止。词法作用域只会查找一级作用域。

```javascript
function foo () {,
  var b = 1;
  g = 2; //全局对象window的属性
  function bar () {
    var b = 2; //屏蔽效应
    g = 3;
    console.log(b);
    console.log(g);
    console.log(window.g) //规避屏蔽
  }
  bar();
}
foo();
```

第三章 函数作用域与块作用域

函数作用域是指，属于这个函数的全部变量都可以在整个函数的范围内使用及复用（嵌套的作用于中也可以使用）。

IIFE 基于函数作用域可以避免过多暴露变量与函数，引起命名标识符之间的冲突，最小限度的暴露必要内容，选择恰当的作用域来包含变量和函数。

```javascript
(function (global, undefined) {
  //undefined是非保留字，为避免undefined被错误覆盖
})(window, )

//UMD模式
(function IIFE (def) {
  // 倒置执行顺序
  def(window);
})(function def (global) {
  var a = 3;
  console.log(a);
  console.log(window.a);
})
window.a = 2;
```

第四章 提升

包括变量和函数在内的所有声明都会在任何代码被执行之前首先被处理。

每个作用域都会进行提升操作。

函数会首先被提升，然后才是变量。

第五章 作用域闭包

当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。

模块

```javascript
function util (string) {
  function repeat (time) {
    return new Array(time+1).join(string);
  }
  function firstUpperCase() {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return {
    repeat,
    firstUpperCase
  }
}

var u = util('this is test string');
u.firstUpperCase();
```

模块需要两个必要条件

* 必须有外部的封闭函数，该函数必须至少被调用一次
* 封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并且可以访问或者修改私有的状态。

现代的模块机制

```javascript
var myModules = (function Manager () {
  var modules = {};

  function define (name, deps, impl) {
    for (var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl, deps);
  }

  function get (name) {
    return modules[name];
  }

  return {
    define,
    get
  }
})();

myModules.define("bar", [], function () {
  function hello (who) {
    return "Let me introduce: " + who;
  }
  return {
    hello
  }
});

myModules.define("foo", ["bar"], function (bar) {
  var hungry = "hippo";

  function awesome () {
    console.log( bar.hello(hungry).toUpperCase() );
  }
  return {
    awesome
  }
});

var bar = myModules.get("bar");
var foo = myModules.get("bar");

console.log(bar.hello('hippo'));

foo.awesome();
```

new绑定

使用new来调用函数，或者说发生构造函数调用时，会自动执行下面的操作

+ 创建（或者说构造）一个全新的对象
+ 这个新对象会被执行[[原型]]连接
+ 这个新对象会绑定到函数调用的this
+ 如果函数没有返回对象，那么new表达式中的函数调用会自动返回这个新对象

优先级
