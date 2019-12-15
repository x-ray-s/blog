---
title: 兼容ie/chrome的水平垂直居中
---
兼容浏览的垂直水平居中，内容可任意宽高。高级浏览器使用display:table,ie6,7使用定位relative/absolute/relative,null/50%/-50%的结构。
简单方法就是直接用table布局。
```html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
	.outer {
		display: table;
		width: 500px;
		height: 300px;
		border: 1px solid #ccc;
		margin: 0 auto;
		text-align: center;
		*position: relative;
	}
	.inner {
		display: table-cell;
		vertical-align: middle;
		*position: absolute;
		*top: 50%;
	}
	.inner div {
		height: 50px;
		width: 100px;
		display: inline-block;
		overflow: hidden;
		*display: block;
		background: #ccc;
		*position: relative;
		*top: -50%;
		*left: -50%;
	}
	</style>
</head>
<body>
	<div class="outer">
		<div class="inner">
			<div>垂直水平居中</div>
		</div>
	</div>
</body>
</html>
```
