---
title: 让IE6支持min-height,最小高度

category: css
---
IE6是不支持min-height属性的，因为IE6的高度是自适应的。如果想实现一个固定高度，容器随着内容增加而自动适应，那么需要兼容浏览器，因为其他浏览器设定高度后，不会自适应。代码如下：

```css
.model {
  height:auto!important;
  height:500px;
  min-height:500px;
}
```
