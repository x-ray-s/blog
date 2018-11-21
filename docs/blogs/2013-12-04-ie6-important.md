---
title: IE6是否支持!important

category: css
---
<strong>答案是支持的</strong>

ie6支持important，但是在同一个选择器使用important才会出现跟其他浏览器显示不同，如果选择器内设置important的属性先执行，就会被后执行的同类型属性所替代。

例如 selector { color:#999!important;color:#333;}

ie6会显示333

selector { color:#333;color:#999!important;}

ie6跟其他浏览器一样会显示#999;

为了证明ie6是认识important属性

selector { color:#999!important;}
