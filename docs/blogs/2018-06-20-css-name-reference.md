---
title: css命名参考

---

# {{$page.title}}

## 模块划分

+ container
+ module / mod
+ card
+ article
+ side
+ tab
+ field

## 标签划分

+ btn
+ form
+ input
+ img

## 布局划分

+ colume
+ lf left
+ rt right
+ hd header
+ bd body
+ ft footer

## 状态划分

+ is-error
+ is-hidden
+ is-collapsed
+ is-active
+ is-disabed

## 实践

可以灵活的继承通用样式，覆盖某些规则，无副作用的添加样式。

```html
<div class="form activity__form">
    <div class="btn btn--disable activity__submit"></div>
</div>
```

## 学习

通过参考优秀的前端组件库来学习命名

+ https://getbootstrap.com/
+ http://semantic-ui.com/
+ https://foundation.zurb.com/
+ http://bulma.io/

## 参考

[BEM naming](http://getbem.com/naming/)
