---
title: 理解原型
---
每个函数都有一个prototype属性，这个属性是一个指针指向一个对象，这个独享可以让所有对象实例共享它所包含的属性和方法。
创建一个构造函数，构造函数中的prototype指向与原型对象，原型对象中会自动获得一个constructor属性，属性包含一个指向prototype所在构造函数的指针。

原型对象中默认取得constructor属性，其他方法，则是从Object继承而来。调用构造函数创建的实例，实例的内部将包含一个指针(ESMAScript 5中称为[[Prototype]])，指向构造函数的原型对象。没有标准方法取得[[Prototype]]，但是FF,Safari,Chrome的每个对象上都支持一个属性_proto_
可以在原型上调用isPrototypeof()方法确定对象之间存在的关系

ECMAScript 5 增加了一个性方法，Object.getPrototypeOf(),在所有支持的实现中，这个方法返回[[Prototype]]的值。

每当对象实例添加一个属性时，这个属性就会屏蔽原型对象中保存的同名属性。要想恢复原型对象中属性的值，要是用delete删除实例属性。

用hasOwnPrototype()方法可以检测一个属性是存在于实例中(True)，还是存在于原型中。

for-in循环时，返回的是所有能够通过对象访问的、可枚举(enumnerated)的属性,包括存在于实例中的属性，也包括存在于原型中的属性。
