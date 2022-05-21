---
title: IE6是否支持!important
---

**答案是支持的**

ie6 支持 important，但是在同一个选择器使用 important 才会出现跟其他浏览器显示不同，如果选择器内设置 important 的属性先执行，就会被后执行的同类型属性所替代。

例如 selector { color:#999!important;color:#333;}

ie6 会显示 333

selector { color:#333;color:#999!important;}

ie6 跟其他浏览器一样会显示#999;

为了证明 ie6 是认识 important 属性

selector { color:#999!important;}
