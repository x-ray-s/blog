---
title: JavaScript继承
---
##类式继承

```javascript
function inherit(C,P) {
	C.prototype = new P();
}
```

将一个对象的原型属性指向一个由父构造函数创建的实例，当使用子构造函数创建实例时，这个新对象会通过原型从父实例中获取它的功能。

###追溯原型链
