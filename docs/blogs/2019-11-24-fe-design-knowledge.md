---
title: 前端需要了解的设计知识
---

# 意义

在日常工作中，与设计师进行沟通和合作的机会是比较多的，设计师作为我们的需求方，一是要满足他的需求，二是提高双方的合作效率。很多设计师对前端不满意，归结于设计稿的还原度，或者某些效果做不出来。很多前端对设计师不满意，因为设计稿没有标准和规范。其实这方面都是需要双方沟通交流推进，而不是互相迁就和抱怨。如果站在对方角度思考问题，并且了解对方的一部分知识，更有助于沟通合作的顺畅。

对于开发人员来说，为了减少重复的工作，比如间距，字体大小，行高等问题的，保证视觉的一致性，还原性，前端需要与设计师一起商讨设计规范。设计规范可以减少不必要的沟通成本，以及提升工作效率。了解一些设计知识，有助于与设计沟通需求以及理解设计意图，从而更好的还原设计好和提供更好的扩展性。

## 约定

- 设计规范(行高，字体，字号，颜色，组件化)
- iconfont 使用
- 蓝湖 ziplin 等设计标准管理

通过一些约定来标准化，提高效率与一致性。既然有了约定就要双方都遵守约定，比如字号的使用如果不符合约束，那么前端可以对设计稿上的非标准标注提出质疑，而不是使用标准的字号。

并且通过一些工具来提高效率，使用 iconfont 等 icon 生成工具减少手动合成 sprite image 的问题。通过标注工具来管理设计稿和标准等。

对于有些已经约定，但是设计师没有遵守的，也可以提出质疑，问一下这个设计稿为什么间距、字号、颜色没有按照标准来，而不是完全根据设计稿还原，带着思考总比不思考要好。

## 图像

前端开发中，图片也是开发中最常遇到的资源类型，而且图片也是一个网页中资源请求占用较多的一部分，很多针对图片的优化都可以带来较高的收益。

先看一下像素的概念：[像素](https://zh.wikipedia.org/wiki/%E5%83%8F%E7%B4%A0)作为图像显示的基本单位。图片大小是图片在磁盘中所占用的大小。

接下来看一下常用的 Web 使用的图片格式：

- [JPEG、JPG](https://zh.wikipedia.org/wiki/JPEG) 有损压缩，
- [PNG](https://zh.wikipedia.org/wiki/PNG) 无损，支持 alpha 透明，支持 256 色调色板技术以产生小体积文件
- [GIF](https://zh.wikipedia.org/wiki/GIF) 无损，支持动画，只能处理 256 种颜色
- [Webp](https://zh.wikipedia.org/wiki/Webp) 可逆压缩(无损和有损)，无损压缩比 PNG 减少**45%**，支持 alpha 透明

通过简单的概念和 wiki 比较，我们先纠正一个误区，PNG 会比 JPG 的 图片小。图片格式的选择是根据特性，而不是看尺寸大小，JPG 是有损压缩，在牺牲质量的情况下可以降低图片大小。同一张图片，在质量（quality）不同的情况下，JPG 也是不同的大小，在同样的质量下，图像大小由于图片内的色彩程度有关。所以 PNG 不一定比 JPG 小，而且 JPG 的压缩算法不适合存储单一颜色的文字 线条。

Webp 图片是在 WEB 开发中优先使用的格式，但是由于兼容问题，可以通过判断是否支持 Webp 格式以及对象存储的图片处理功能来做优化。常见的 [阿里云 OSS](https://help.aliyun.com/document_detail/44686.html?spm=a2c4g.11174283.6.1252.2a067da2f9Oi58) 和 [腾讯 COS](https://cloud.tencent.com/document/product/460/36540) 等对象存储都支持图片处理。

```js
// 判断是否支持 Webp
function isWebpSupport() {
  const dataUrl = document.createElement('canvas').toDataURL('image/webp')
  return dataUrl.indexOf('data:image/webp') === 0
}
```

如果你不理解图片格式的区别，你就没有办法给出相对优化的切图选择和使用方案。

## 全局样式

line-height 问题

photoshop 可以通过首选项内的字体行高来设置，Sketch 在 UI 设计中更通用，但对 iOS 、 Android 和 Web 中的表现又不全一致，可以通过社区内的插件来解决，具体行高的问题[参考](https://www.darmau.com/from-sketch-to-ide/)。实际 Web 中，可以约定一个默认行高，前端给 html 元素设置全局的 line-height 保持一致，只需要在非基准行高指定位置做覆盖即可。

```css
html {
  line-height: 1.4;
}

input {
  line-height: 1.2;
}

h1,
h2,
h3,
h4,
h5 {
  line-height: 1.2;
}

.title {
  line-height: 1.2;
}
```

同样，字体 字号 颜色等继承属性也可以根据上面做规划。

通过全局样式的约定，可以减少重复属性的设置。

## 理解设计和产品意图

理解设计意图更容易还原设计。

比如：

一个元素背景，在 Sketch 的标注中是 `opacity: 0.9; background-color: #000`，如果你按照这个标准的 CSS 代码，那么你元素内的所有子元素，都会以透明度 90% 来绘制，但设计的意图只是背景色为 90% 透明度的黑色，因为 Sketch 的标准已图层为准，不存在子元素的概念，而是以图层叠加方式，所以这时候用 `background: rgba(0, 0, 0, .9)` 会合适。

所有标注的代码，高度与宽度固定，那么我们要思考这个元素是否是固定宽高还是又内容决定的内边距。

一个元素的外边距是使用上一个元素的 `margin-bottom` 还是下个元素的 `margin-top`，还是说两者都需要的 `margin` X 轴方向，是由产品逻辑决定的，而不是视觉效果。一个元素的空白间距是用 `padding` 还是 `margin` 是由一个元素所处块的意义决定，比如一个在卡片中的标题，它的 X 轴空白间隙是 h1 的 `margin` 还是 card 的 `padding` 的考虑是，如果及时没有标题也要有间距而且是这个距离，那么这个间距就一定是 `padding`，如果是 `margin` 就要解决 card 的外边距折叠问题，这个折叠是否是需要的。

一个元素是使用背景图还是使用 `<img>` 的思考，是这个图片允许用户下载（否则使用背景图），这个图片是内容的一部分（否则使用背景图），图片是否是有意义的（是否提供 alt 属性，或使用背景图）

对使用的样式属性都进行思考，更有利于构成自己的 CSS 样式体系，对使用的命名，标签，属性，嵌套有自己的理解，而不是为了完成工作而实现。

## 中文排版与标点挤压

对于长文的排版和标点需求，可以参考下面的引用。

- [中文排版需求](http://img2.w3ctech.com/%E4%B8%AD%E6%96%87%E6%8E%92%E7%89%88%E9%9C%80%E6%B1%82-cssconf.pdf)
- [Han](https://github.com/ethantw/Han)
