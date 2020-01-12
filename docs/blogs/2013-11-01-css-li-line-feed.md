---
title: 解决IE6 li浮动后折行问题
---
li浮动不设定宽度，只要紧邻边界的li与边界的宽度能放下一个字节大小，那么就会产生折行。

{word-break: keep-all;} 可解决；如果li内有空白符，{white-space: nowrap} 可解决。
