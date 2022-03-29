---
title: 使用vscode常用配置
---

# {{$page.title}}

## vscode 所需插件

- eslint
- prettier
- editorconfig
- vetur
- Manta's Stylus Supremacy

## vscode config

- emmet 支持 vue 内 html 标签
- eslint 支持 **.vue** 文件
- prettier 支持
- stylus 支持

```json
{
  "editor.formatOnSave": true,
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.wordWrap": "wordWrapColumn",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.syntaxProfiles": {
    "vue-html": "html",
    "vue": "html"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "stylusSupremacy.insertColons": false,
  "stylusSupremacy.insertSemicolons": false,
  "stylusSupremacy.insertBraces": false,
  "stylusSupremacy.insertNewLineAroundImports": false,
  "stylusSupremacy.insertNewLineAroundBlocks": false,
  "tabnine.experimentalAutoImports": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "terminal.integrated.shellArgs.osx": []
}
```

## npm 所需

- eslint
- eslint-plugin-html
- eslint-plugin-vue
- prettier

## 项目所需配置

- .eslintrc
- .prettierrc
- editorconig
