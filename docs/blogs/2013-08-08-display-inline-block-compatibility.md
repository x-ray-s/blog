---
title: display:inline-block的兼容问题

category: css
---
有些人认为ie6不支持inline-block,这是一种错误的认识，只是IE6对inline-block的支持不太好，块级元素不支持设置为inline-block，但是行内元素是支持inline-block的，下面给出测试代码作为参考。同时也扩展了一下隐藏文字内容的一些小技巧。
<!--more-->
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>inline-block测试</title>
  <style>
  body {
    font: 12px/1.5 arial,"微软雅黑";
  }
  .block {
    display: inline-block;
    height: 90px;
    width: 90px;
    background: #ccc;
  }
  .inline {
    display: inline;
    height: 90px;
    width: 90px;
    background: #999;
  }
  .space {
    margin: 5px;
    padding: 5px;
  }
  .article {
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  .indent {
    text-indent: 50px;
  }
  .hidden-text {
    line-height: 999em;
    overflow: hidden;
  }
  .fs0 {
    font-size: 0;
    line-height: 0;
    overflow: hidden;
  }
  </style>
</head>
<body>
  <div class="article">
    <span>这是个行内元素span</span>
  </div>
  <div class="article">
    <h5>行内元素的display:inline-block</h5>
    <span class="block space"></span>
    <span class="block space"></span>
    <h5>行内元素处理空文本</h5>
    <span class="block"></span>
    <span class="block"></span>
  </div>
  <div class="article">
    <h5>块级元素的display:inline-block</h5>
    <div class="block space"></div>
    <div class="block space"></div>
  </div>
  <div class="article">
    <h5>行内元素的display:inline-block，在IE6中text-indent会作用给元素...</h5>
    <span class="block indent"></span>
    <p>注：所以在使用a和span等行内元素添加inline-block属性时,如果要隐藏内容不能使用text-indent:-999em;可以使用line-height:999em;overflow:hidden</p>
    <a href=" class="block hidden-text">隐藏文字内容</a>
    <p>也可使用font-size:0;line-height:0;overflow:hidden;</p>
    <a href=" class="block fs0">隐藏文字内容</a>
  </div>
</body>
</html>
```

总结:带有块级特征横向排列的行内元素可以使用inline-block，浏览器都兼容。需要注意的是IE6/7不会处理中间的空格，其他浏览器会处理空格。ie6中需要隐藏文字不要使用text-indent;块级元素不要使用inline-block。
