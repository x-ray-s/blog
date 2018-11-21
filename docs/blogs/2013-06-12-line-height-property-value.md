---

title: line-height的值带单位与不带单位的区别

category: css
---
line-height:1.5和line-height:150%有什么区别呢？

简单看来，这两个值都是行高为默认单位的1.5倍，可是在某些情况下会得到意想不到的结果。

例如父元素具有line-height和font-size属性，子元素也有font-size属性时，line-height值的单位为%,em,px时都不会继承;而不带单位时，值会继承。
```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
	* {
		margin:0;
		padding: 0;
	}
	div {
		font-size: 14px;
		line-height: 1.5;
	}
	p {
		font-size: 50px;
		background: #ccc;
	}
	</style>
</head>
<body>
	<div>
		<p>行高没单位时</p>
		<p>子元素的行高</p>
		<p>会根据子元素字体大小而改变</p>
	</div>
</body>
</html>
```
