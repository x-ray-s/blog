---
title: CSS制作三角形
---
用css制作的step模块，主要知识点是border的用法。
<!--more-->
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  body {
    font-size: 12px;
    font-family: "微软雅黑";
  }
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .clearfix {
    display: inline-block;
  }
  .c-d-tag-nav a {
    float: left;
    margin-right: -21px;
  }
  .c-d-tag-nav .active .c-d-tag-l {
    border-color: #fec744 #fec744 #fec744 transparent;
  }
  .c-d-tag-nav .active .c-d-tag-m {
    background: #fec744;
    color: #333;
  }
  .c-d-tag-nav .active .c-d-tag-r {
    border-color: transparent transparent transparent #fec744;
  }
  /* dashed 对应 transparent 表示空白*/
  .c-d-tag-l {
    float: left;
    height:0px;
    width:0px;
    border: 11px solid #000;
    border-color: #29d7f6 #29d7f6 #29d7f6 transparent;
    border-style:solid solid solid dashed;
    line-height: 0px;
    cursor: pointer;
  }
  .c-d-tag-r {
    float: left;
    height:0px;
    width:0px;
    border: 11px solid #000;
    border-color: transparent transparent transparent #29d7f6;
    border-style: dashed dashed dashed solid;
    line-height: 0px;
    cursor: pointer;
  }
  .c-d-tag-m {
    float: left;
    height: 22px;
    line-height: 22px;
    background: #29d7f6;
    color: #fff;
    padding-right: 11px;
    cursor: pointer;
  }
  </style>
</head>
<body>
  <div class="c-d-tag-nav clearfix">
    <a href=" class="active"><em class="c-d-tag-l"></em><span class="c-d-tag-m">完善资料</span><em class="c-d-tag-r"></em></a>
    <a href="><em class="c-d-tag-l"></em><span class="c-d-tag-m">修改密码</span><em class="c-d-tag-r"></em></a>
    <a href="><em class="c-d-tag-l"></em><span class="c-d-tag-m">修改头像</span><em class="c-d-tag-r"></em></a>
    <a href="><em class="c-d-tag-l"></em><span class="c-d-tag-m">用户绑定</span><em class="c-d-tag-r"></em></a>
  </div>
</body>
</html>
```
