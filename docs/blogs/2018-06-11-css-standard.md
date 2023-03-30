---
title: css代码规范化
---

## 意义？

#### 促进团队的协作。

提高更高的工作效率，减少沟通成本。

#### 降低维护成本

更容易让新人了解项目，更快的加入到项目中，维护代码成本降低。

#### 有助于个人的成长

规范化，标准化，体现一个工程师的专业程度，对工程化的理解，也是一个程序员职业素养的体现。

#### 对项目的规划能力

规范的过程，也是你对项目的把控能力，如何把项目拆分成组件，把通用的样式抽离成方法。

## css 特性

- 选择器具有优先级
- 规则之间可层叠

## 命名体系

- [oocss](http://oocss.org/) - Object-Oriented CSS

  - 容器与外观分离
  - 内容与结构分离

- [SMACSS](https://smacss.com/) Scalable and Modular Architecture for CSS

  - 将结构分离
  - 命名规范
  - css 与 html 分离

- [BEM](http://getbem.com/) - Block Element Modifier

## 良好的架构

- 预测 - 可预见性
- 复用
- 维护
- 延展

## 遇到的问题

- 无意义的选择器与嵌套 （副作用：权重）

```css
ul.infoContRightList {
}
p.Size {
}
p.Name {
}
```

- 不规范的命名 （副作用：混乱）

```css
.Dw-b {
}
.Tp-b {
}
.left {
  width: 100px;
  background: #eee;
}
```

- 缺少公共方法
- 复用与分离
- [Style Resources Loader](https://www.npmjs.com/package/style-resources-loader)

### 引用：

[漫談 CSS 架構方法 - 以 OOCSS, SMACSS, BEM 為例](https://www.slideshare.net/kurotanshi/css-oocss-smacss-bem)
