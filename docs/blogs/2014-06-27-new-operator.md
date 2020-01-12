---
title: new操作符
---
当以new操作符调用构造函数时，函数内部将会发生一下情况

<ul>
	<li>创建一个空对象并且this变量引用了该对象</li>
	<li>属性和方法被加入到this引用的对象中</li>
	<li>新创建的对象由this所引用，并且最后隐士地返回this(如果没有显式返回其他对象)</li>
</ul>

强制使用new模式
```javascript
function Waffle(){
  var that = {};
  that.tastes = "yummy";
  return that;
}

function Waffle(){
  return {
    tastes: "yummy"
  }
}
```

这种模式的问题在于他会丢失到原型的链接。

自调用构造函数
```javascript
	function Waffle(){
		if(!(this instanceof Waffle)) {
			return new Waffle()
		}
		this.tastes = "yummy"
	}
```
构造函数中检查this是否与构造函数的一个实例。
