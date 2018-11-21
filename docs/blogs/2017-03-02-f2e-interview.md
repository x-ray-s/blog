---
title: 前端面试题笔记--js语言特性

category: javascript
---

## 闭包

引用MDN的概念：

> "闭包是指那些能够访问独立(自由)变量的函数 (变量在本地使用，但定义在一个封闭的作用域中)。换句话说，这些函数可以“记忆”它被创建时候的环境。"

个人理解：函数的一个内部变量在函数调用后仍然保持对变量的引用，这种情况称之为闭包。

e.g

```javascript
    function closure () {
        var self = "me";
        function callMe () {
            alert(self);
        }
        return callMe;
    }
    var foo = closure();
    foo();
```

最常见的例子

```html
<a href="">1</a>
<a href="">2</a>
<a href="">3</a>
<script>
var eles = document.querySelectorAll('a');
for (var i = 0; i < eles.length; i++) {
    eles[i].onclick = function (e) {
        e.preventDefault();
        alert(i);
    }
}
//输出3

for (var i = 0; i < eles.length; i++) {
    (function (index) {
        eles[index].onclick = function (e) {
            e.preventDefault();
            alert(index);
        }
    })(i);
}
//输出0 1 2

function action (index) {
    return function () {
        alert(index);
    }
}
for (var i = 0; i < eles.length; i++) {
    eles[i].onclick = action(i);
}
//输出0 1 2
</script>

## this关键字

见《你不知道的javascript》

## 原型链

见《你不知道的javascript》

```
