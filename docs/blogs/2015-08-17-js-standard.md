---
title: 前端代码规范
---

##良好的注释与缩进

###缩进的统一
缩进使用space替换tabs，大多数语言缩进长度使用4个单位，但如js,py这种代码量小，嵌套与缩进较少的语言推荐使用2个单位。

**sublime设置**

```python
"tab_size": 4,
"translate_tabs_to_spaces":true,
"ensure_newline_at_eof_on_save": true,
"trim_trailing_white_space_on_save": true
```

如果你开发使用不同语言，并且格式不同，可以使用[EditorConfig](http://editorconfig.org/))配置你的编辑器。

###空格

```css
.class {
    font: 16px/1.5 "Microsoft YaHei", arial, sans-serif;
}
```

###结尾分号与空格

```javascript

var a = 1 + x;
var b = function (a) {
    return a + 2;
};
var obj = {
    a: 1,
    b: "abc"
    c: function () {
      //
    }
};
if (b) {
   a += b;
}
for (var i = 0; i <= arr.length; i++) {
  console.log(i);
}

function foo (a, b, c) {
    return a + b + c;
}
foo();
```

###注释

必要的注释与分割，以及可生成文档的注释。

##结构

###文档类型
<!DOCTYPE html>

###文件引入
link/script 不需要type与language属性。

link在head引入

script放在页面底部引入

不要在页面中插入行内样式与脚本

###标签
合理的缩进与嵌套

##样式

###命名
选择[BEM](https://en.bem.info/)命名，减少后期维护成本，减少冲突，更利于阅读理解。

e.g mail-tpl-lf

常用布局命名lf rt hd bd ft

常用容器命名wrap container content

[1] [CSS架构方式](http://www.slideshare.net/kurotanshi/css-oocss-smacss-bem)

###选择器
避免过多使用id选择器，避免不必要的父级选择器。

id选择器权重过高，不好覆盖样式。而且ID具有唯一性，无法重用。

```css
//wrong
.container .content .content-bd .tilte {
  /**/
}
//right
.content-bd-title {
  /**/
}
```

###属性
属性简写，并且按照一定规则顺序。

显示属性 自身属性 文本属性。

##脚本
不要使用全局变量

函数内部声明的变量，需要放在函数最上面。

```javascript
function foo(a, b, c) {
    var n = 1,
        x = a + b;
}
```
重复使用的对象赋值给变量

```javascript
var body = $('body');
```

不使用隐式类型转换

```javascript
parseInt(011, 10);
if (1 === '1') {
//
}
```

命名约定

```javascript
var CONSTANT;
var _self;
```

+ [1] [HTML/CSS代码风格指南](/blogs/2013-04-30-html-css-code-style.html)
+ [2] [前端工作流](/blogs/2015-08-01-front-project-architecture.html)
