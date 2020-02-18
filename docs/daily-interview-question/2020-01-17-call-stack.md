---
title: Call Stack 2020-1-17
---

# Call Stack

理解调用栈，并使用 Chrome Devtools 或 VS code debug 调试观察调用栈。

理解调用栈和调试工具有利于 debug 和后续对 **事件循环** 和浏览器运行机制的理解。

## VS code debug 的简单使用

使用 node 模式调试 js 文件

- 点击编辑器 Debug 菜单，并创建一个配置
- 右下增加配置按钮，或者使用代码提示功能增加 node 配置
- 点击运行

配置可能是

```json
{
  "type": "node",
  "request": "launch",
  "name": "Launch Program",
  "skipFiles": ["<node_internals>/**"],
  "program": "${file}"
}
```

使用 浏览器 模式调试 html 文件

- 创建一个 html 文件，并引入 js 文件
- 安装 [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- 增加 browser 配置
- 点击运行

配置可能是

```json
{
  "type": "chrome",
  "request": "launch",
  "name": "Launch Chrome",
  "file": "${workspaceFolder}/index.html",
  "webRoot": "${workspaceFolder}"
}
```

不断修改和尝试不同的代码，增加断点并观察调用堆栈。

## 参考

- [调用栈](https://developer.mozilla.org/zh-CN/docs/Glossary/Call_stack)
- [调试 JavaScript 入门](https://developers.google.com/web/tools/chrome-devtools/javascript?hl=zh-cn)
- [Debugging](https://code.visualstudio.com/docs/editor/debugging)
