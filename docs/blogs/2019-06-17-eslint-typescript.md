---
title: 使用 ESLint 管理 Typescript
---

# {{$page.title}}

起因是因为 Typescript 团队因 TSLint 存在性能为题，决定切换到 ESLint。[【详情】](https://eslint.org/blog/2019/01/future-typescript-eslint#linting)

这样我们就不必查阅两个工具的文档，使用一个配置，以及在编辑器内使用一个插件就可以满足 `.js` 和 `.ts` 文件的代码检查了 🎉

## 安装

```bash
yarn add eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

- `eslint`: ESLint 核心库
- `@typescript-eslint/parser`: 用于替代 ESLint 默认解析器。
- `@typescript-eslint/eslint-plugin`: ESLint 插件，用于特定的 Typescript 规则。

## 配置

```bash
touch .eslintrc.js
```

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  }
};
```

## 配合 Prettier

```bash
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

- `prettier`: 核心库
- `eslint-config-prettier`: 关闭与 Prettier 冲突的 ESLint 规则。
- `eslint-plugin-prettier`: 使用 prettier 作为 ESLint 规则。

```bash
touch .prettierrc
```

```js
{
  "semi": false,
  "singleQuote": true
}
```

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  }
};
```

## VS Code 配置自动修复代码

```js
"editor.formatOnSave": true,
"eslint.validate": [
  "javascript",
  { "language": "typescript", "autoFix": true }
],
"prettier.eslintIntegration": true,
```

## Vue 支持

```js
yarn add eslint-plugin-vue -D
```

```git
.eslintrc.js

--- parser
+++ parserOptions.parser

...
```

```git
vscode setting.json

"eslint.validate": [
+++ { "language": "vue", "autoFix": true }

...
```

## 参考

- [typescript-eslint - github ](https://github.com/typescript-eslint/typescript-eslint)
- [typescript-eslint - playground](https://javascriptplayground.com/typescript-eslint/)
- [Using ESLint and Prettier in a TypeScript Project - dev.to](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)
- [ESLint - vuejs](https://eslint.vuejs.org/user-guide/#installation)
