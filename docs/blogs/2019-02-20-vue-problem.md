---
title: Vue 问题收集
---

## Vue test utils 问题

- 当使用 `babel-jest` 测试 Vue 组件时，注意配置 `.babelrc.js`

```js
let presets = ['@vue/app']
if (process.env.NODE_ENV === 'test') {
  presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ]
}
module.exports = {
  presets,
}
```

- 如使用 `Jest 24`，增加以下配置

```json
// package.json
"devDependencies": {
  "@babel/plugin-syntax-dynamic-import": "^7.2.0",
  "babel-core": "^7.0.0-bridge.0",
},
"peerDependencies": {
  "babel-core": "6.x || ^7.0.0-bridge.0"
},

// .babelrc.js
plugins: ["@babel/plugin-syntax-dynamic-import"]
```

- Jest 的相关配置

```js
// jest.config.js
moduleFileExtensions: [
  "js",
  "json",
  "vue"
],
transform: {
  ".*\\.(vue)$": "vue-jest",
  "^.+\\.js$": "babel-jest",
  ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$": "jest-transform-stub"
},
// webpack alias的兼容
moduleNameMapper: {
  "^@/(.*)$": "<rootDir>/src/$1"
},
```

## 样式问题

- Vue 使用 Stylus 作为预处理，并存在多个不同的 `<style>` 属性标签，如 module 和 scoped, 并且 Vscode 中使用 Vetur 插件格式化时，会引起代码错乱。见 [github issues](https://github.com/vuejs/vetur/issues/499)

代码层面可以使用 `CSS Modules` 中的 :local :global 和 `Scoped CSS` 中 >>> 替代多个 `<style>`

工具层面可以避免使用手动的格式化。

- Transition in CSS Modules

```html
<transiton :name="$style.demo"> </transiton>
```

`vue-loader` 不支持推断 transiton name，可以使用 `<style>` 或 `<style scoped>` 替代 `<style module>` 的 enter-class/leave-class

- Keyframes in Scoped CSS

动画名称的检测是每个 `<script>` 标签。而不是每个组件
