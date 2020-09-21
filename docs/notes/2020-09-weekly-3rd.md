---
title: 9月 第三周
---

# {{$page.title}}

### 谷歌扩展

[grepper](https://www.codegrepper.com/index.php) 快速搜索代码片段

### VS Code 扩展

[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) Tailwind 的智能语法提示
[WASDMAP](https://marketplace.visualstudio.com/items?itemName=mvromer.wasdmap) 修改方向键为 WASD

发现一个在 `.vue` 中使用 `stylus` 的问题，因为 `vetur` 中是用的 `language-stylus` 不支持 `@apply` rules, 所以在使用 `Tailwind CSS` 时，无法高亮 `@apply` 规则。

而且在开启 `"editor.defaultFormatter": "esbenp.prettier-vscode",` 后， `vetur` 的 formatter 也就失效了。

### 代码

在 `nuxtjs` 中使用 `stylus` 的 `@import` 语法时，如果要使用 `webpack alias`，需要使用 `~@` 作为别名前缀。

```html
<style lang="stylus">
  @import '~@/assets/css/app.styl'
</style>
```
