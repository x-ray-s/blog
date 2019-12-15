---
title: 数组
---
以数组作为操作数并使用typeof操作符，其结果将会返回"object".

```javascript
	if(typeof Array.isArray === 'undefined') {
		Array.isArray = function(arg){
			return Object.prototype.toString.call(arg) === "[object Array]";
		}
	}
//生成重复字符串
	String.prototype.repeat = function(i){
		return new Array(i+1).join(this)
	}
```

