---
title: js代码规范化
---

# {{$page.title}}

## Eslint

### 代码质量检查 linter -- 检查器

[Eslint](http://eslint.cn/docs/rules/)

检查语法错误 可能引起错误的语法 以及没有必要输入

### 代码风格检查 formatter -- 美化器 格式化

风格统一化

### 团队中的作用

语法检查 作为编写代码的第一步，保证代码质量。

提交的代码保持风格的统一，利于团队的协作，后续开发以及可维护性。

## Prettier

[Prettier](https://prettier.io/docs/en/options.html)

美化器，几乎不需要配置，因为是美化器，所以可以不需要有顾虑的直接在文件改动后直接执行


#### [If eslint can auto fix/format code why to use Prettier?](https://github.com/prettier/prettier-eslint/issues/101)


其实 `eslint --fix` 可以做到和 __prettier__ 几乎相同的事情，但是 _P_ 配置更少，只是风格上的统一化，所以更适合放在开发工程中。

所以建议是在编辑器和个人中使用 __prettier__ 来简化操作，`eslint --fix` 在提交代码和生成代码时再保证一致性。


## Sourcemap

[关于sourcemap](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)


[gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps)

主要接口

+ addComment

+ sourceMappingURL

```javascript
sourceMappingURL: function(file) {
  return 'https://asset-host.example.com/' + file.relative + '.map';
}

```

[sourcemap可视化](http://sokra.github.io/source-map-visualization/)

[source-map](https://github.com/mozilla/source-map)
