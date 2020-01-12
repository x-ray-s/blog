---
title: css简写
---
CSS简写就是把同类型的多条属性声明化为一条，又称代码优化。这样做可以减少文件大小，简化代码，美观，清晰，易维护，增加工作效率。下面就介绍一些常用的CSS简写方法。

<h4>边距margin/填充padding/边框宽度border-width</h4>
margin/padding: value; 表示4边样式

margin/padding: vertical-value horizontal-value;表示垂直 水平

margin/padding: left-value vertical-value right-value;表示左 垂直 右

margin/padding: top-value right-value bottom-value left-value;表示上 右 下 左 顺时针~

注：单独定义border-width是没有作用的，首先使用border-style属性来设置边框。
<h4>边框border</h4>
border: 1px solid #000; 1像素 黑色 实线边框

定义顺序： border-width \| border-style \| border-color

border-width: thin\|medium\|thick\|<em>length</em>\|inherit

border-style: none\|hidden\|solid\|dotted\|dashed\|double\|groove\|ridge\|inset\|outset\|inherit

border-color: <em>color_name</em>\|<em>hex_number</em>\|<em>rgb_number</em>\| transparent\|inherit
<h4>背景background</h4>
background:#fff url(bg.gif) no-repeat fixed left top;

定义顺序：background-color \| background-image \| background-repeat \| background-attachment \| background-position

background-attachment: scroll\|fixed;

background-position: center\|left\|right\|top\|bottom 具体数值时 顺序是水平值 垂直值
<h4>文字font</h4>
font:italic small-caps bold 12px/1.5em arial,verdana;

定义顺序：font-style \| font-variant \| font-weight \| font-size/line-height \| font-family

font-style: normal\|italic\|inherit

font-variant: normal\|small-caps\|inherit

最少定义字体大小和字体类型
<h4>list-style</h4>
list-style:square outside url(bullet.gif);

定义顺序：list-style-type \| list-style-position \| list-style-image
