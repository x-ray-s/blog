---
title: Flutter 布局 API
---

# {{$page.title}}

## Widget

### Container

Container

`padding` : EdgeInsets.all(20)

`margin` : margin: EdgeInsets.fromLTRB(0, 40, 0, 30)

`decoration`: BoxDecoration(color: Colors.white)

`transform`: Matrix4.translationValues(0, -10, 0)

`BoxDecoration`:

`borderRadius`: BorderRadius.only(topLeft: Radius.circular(10), topRight: Radius.circular(10)))

`image`: DecorationImage(image: NetworkImage('https://img.la/purple/164x130'),fit: BoxFit.cover)))

### Layout

`Row` `Column` 接近于 CSS 中的 `flex`。

`MainAxisAlignment` 和 `CrossAxisAlignment` 是主轴和交叉轴的对齐方式，与 CSS 中 justify 和 align 相似。

mainAxisSize 可以调整主轴的空白大小 `flex-grow`

`Expanded` 类似于 `flex-item`, 可以调整弹性系数(flex-grow / flex-shrink)

## 参考

- [Flutter 实战](https://book.flutterchina.club/)
- [MDC - Flutter 布局](https://developers.google.com/codelabs/mdc-102-flutter?hl=zh-cn#0)
- [Flutter API](https://api.flutter.dev/flutter/painting/BorderRadius-class.html)
