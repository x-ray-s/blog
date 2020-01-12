---
title: 使用vscode常用配置
---

# {{$page.title}}

## vscode 所需插件

+ eslint
+ prettier
+ editorconfig
+ vetur
+ Manta's Stylus Supremacy

## vscode config

+ emmet 支持 vue 内 html 标签
+ eslint 支持 __.vue__ 文件
+ prettier 支持
+ stylus 支持

```json
{
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "vue-html": "html",
    "vue": "html"
  },
  "eslint.validate": ["javascript", "javascriptreact", "html", "vue"],
  "vetur.format.defaultFormatter.html": "prettyhtml",
  "vetur.format.defaultFormatterOptions": {
    "prettyhtml": {
      "sortAttributes": true
    }
  },
  "stylusSupremacy.insertColons": false,
  "stylusSupremacy.insertSemicolons": false,
  "stylusSupremacy.insertBraces": false,
  "stylusSupremacy.insertNewLineAroundImports": false,
  "stylusSupremacy.insertNewLineAroundBlocks": false,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "terminal.integrated.shellArgs.osx": []
}
```

## npm 所需

+ eslint
+ eslint-plugin-html
+ eslint-plugin-vue
+ prettier

## 项目所需配置

+ .eslintrc
+ .prettierrc
+ editorconig
