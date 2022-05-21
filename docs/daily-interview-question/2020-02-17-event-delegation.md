---
title: Event Delegation 2020-2-17
---

# Event Delegation

### 请解释事件代理 (event delegation)。

> 冒泡还允许我们利用事件委托——这个概念依赖于这样一个事实,如果你想要在大量子元素中单击任何一个都可以运行一段代码，您可以将事件监听器设置在其父节点上，并让子节点上发生的事件冒泡到父节点上，而不是每个子节点单独设置事件监听器。
> [MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)

将事件监听器设置在元素的父节点上，并元素上发生的事件冒泡到父节点上，而不是每个元素单独设置事件监听器。

一般来说我们会使用 jQuery 的 [`.on( events , selector [, data ], handler )`](https://api.jquery.com/on/) 来实现事件委托。

### 相关

- [Event delegation](https://javascript.info/event-delegation)
- [How JavaScript Event Delegation Works](https://davidwalsh.name/event-delegate)
