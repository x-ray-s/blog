---
title: 10月 第四周
---

# {{$page.title}}

### 前端

- parcel@next 在 WSL 下会引起系统假死，谨慎使用。

### Pixel

```shell
adb shell "settings put global captive_portal_https_url https://captive.v2ex.co/generate_204";
```

解决 Wi-Fi 或 移动数据时 “无法连接互联网” 的错误

### React

在同一个 DOM 节点重复挂载组件可以使用 `ReactDom.render()`, 与其对应的移除挂载为 `ReactDom.unmountComponentAtNode()`

使用 [`useImperativeMethods`](https://react.html.cn/docs/hooks-reference.html#useimperativemethods) 可以对子组件内部的 `useRef` 引用暴露给父级的 `ref` 进行调用。
