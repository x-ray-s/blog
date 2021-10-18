---
title: CSS文本属性word-break和word-wrap
---

CSS 手册中对这两个属性的概念比较难理解，什么亚洲语言和非亚洲语言...其实就可以理解成中英文两种。

word-wrap: normal|break-word

- normal 连续英文不会换行
- break-word 同 word-break: break-all;

word-break: normal|break-all|keep-all

- normal 同上，中英文时会考虑单词换行
- break-all 会使英文单词词内断行，中英文混排使也会折断单词
- keep-all 中英文混排时也会考虑单词换行

工作中，使用 word-wrap: normal 即可; 想折断单词就要用 word-break: break-all 就好了。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      .clearfix:after {
        content: '.';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }
      .clearfix {
        display: inline-block;
      }
      .clear {
        clear: both;
      }
      .box {
        float: left;
        margin-right: 50px;
        width: 150px;
        min-height: 100px;
        background: #eee;
        color: #333;
        font-size: 12px;
        line-height: 1.5;
      }
      .wrap {
        margin: 20px 0;
      }
      .normal {
        word-break: normal;
      }
      .break {
        word-break: break-all;
      }
      .keep {
        word-break: keep-all;
      }
      .box p {
        margin: 5px;
      }
      .wrap-normal {
        word-wrap: normal;
      }
      .wrap-break {
        word-wrap: break-word;
      }
      .nowrap {
        white-space: nowrap;
      }
    </style>
  </head>
  <body>
    <h5>word-break是控制是否“断词折行”的，设置或检索当前行超过指定容器的边界时是否断开转行。主要控制非亚洲语言</h5>
    <div class="wrap clearfix">
      <div class="box normal">
        <p>默认值normal，英文单词可以自动折行，但对长单词不起作用</p>
        <p>
          The World Wide Web Consortium (W3C) is an international community that develops open standards to ensure the long-term growth of
          the Web. Read about the W3C mission.
        </p>
        <p>TheWorldWideWebConsortium(W3C)</p>
      </div>
      <div class="box break">
        <p>break-all，强制英文断词折行</p>
        <p>
          The World Wide Web Consortium (W3C) is an international community that develops open standards to ensure the long-term growth of
          the Web. Read about the W3C mission.
        </p>
        <p>TheWorldWideWebConsortium(W3C)</p>
      </div>
      <div class="box keep">
        <p>keep-all，跟normal类似，英文单词可以自动折行，但对长单词不起作用</p>
        <p>
          The World Wide Web Consortium (W3C) is an international community that develops open standards to ensure the long-term growth of
          the Web. Read about the W3C mission.
        </p>
        <p>TheWorldWideWebConsortium(W3C)</p>
      </div>
    </div>
    <h5>word-wrap属性</h5>
    <div class="wrap clearfix">
      <div class="box wrap-normal">
        <p>默认值normal，英文单词可以自动折行，但对长单词不起作用</p>
        <p>
          The World Wide Web Consortium (W3C) is an international community that develops open standards to ensure the long-term growth of
          the Web. Read about the W3C mission.
        </p>
        <p>TheWorldWideWebConsortium(W3C)</p>
      </div>
      <div class="box wrap-break">
        <p>break-word，强制英文断词折行</p>
        <p>
          The World Wide Web Consortium (W3C) is an international community that develops open standards to ensure the long-term growth of
          the Web. Read about the W3C mission.
        </p>
        <p>TheWorldWideWebConsortium(W3C)</p>
      </div>
    </div>
    <h5>中文强制不换行white-space</h5>
    <div class="wrap clearfix">
      <div class="box nowrap">
        <p>想要让中文强制不换行可以使用white-space:nowrap属性</p>
      </div>
    </div>
  </body>
</html>
```
