---
title: HTML/CSS代码风格指南
---

摘自<a href="http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml?showone=Optional
**tags#Optional_tags" target="**
blank"><em>《Google HTML/CSS 代码风格指南》</em></a>

这个文档为 HTML 和 CSS 定义了格式和样式。它旨在提高合作，代码质量，和使其基础设施配套。

<h3>通用样式规则</h3>

**删除来自嵌入资源中的协议**

删除 URL 中指向图片和其他媒体文件，style sheets 样式表和 scripts 脚本的协议部分（http:,https:）,除非各自文件在这两种协议中不可用。
删除那些让 URL 变得相对的协议，阻止混淆的内容问题（这样）结果就会节省少量的文件大小。

```html
<!-- Not recommended -->
<script
  type="text/javascript"
  src="http://www.google.com/js/gweb/analytics/autotrack.js"
></script>

<!-- Recommended -->
<script
  type="text/javascript"
  src="//www.google.com/js/gweb/analytics/autotrack.js"
></script>

/* Not recommended */ .example { background:
url(http://www.google.com/images/example); } /* Recommended */ .example {
background: url(//www.google.com/images/example); }
```

<h3>通用的格式化规则</h3>

**缩进**

一次缩进 2 个空格
不要使用 tabs 键或者混合使用 tabs 键和 spaces 键来缩进

```html
<ul>
  <li>Fantastic</li>
  <li>Great</li>
</ul>

.example { color: blue; }
```

**大小写**

只使用小写字母
所有的代码都必须是小写的：这应用于元素名字，特性，特性值（除了 text/CDATA）,选择器，属性和属性值（字符串除外）

```html
<!-- Not recommended -->
<a href="/">Home</a>

<!-- Recommended -->
<img alt="Google" src="google.png" />

/* Not recommended */ color: #E5E5E5; /* Recommended */ color: #e5e5e5;
```

**末尾的空格**

删除末尾的空格
末尾的空格是不必要的否则它能使差异复杂化

```html
<!-- Not recommended -->
<p>
  What?_

  <!-- Recommended -->
</p>

<p>Yes please.</p>
```

<h3>通用的Meta规则</h3>

**编码**

使用 UTF-8 编码（没有 BOM），即无 BOM 格式编码
确保你的的编辑器使用 UTF-8 作为字符编码，没有字节顺序标记
详细说明 HTML 模板和文档中编码通过&lt;meta charset="utf-8" /&gt;。不要臆想 style sheets 样式表中编码为 UTF-8.
（更多关于编码以及何时和如何详细说明它们可以访问http://www.w3.org/International/tutorials/tutorial-char-enc/en/all.html）

**注释**

在可能需要解释的地方，解释一下代码
用注释来解释代码：它覆盖了什么，它被用作什么目的，为什么各自的解决方法被使用或者是首选的。
（这个条目是可选的，因为它不被视作一个实际可行的以期望总是要求满满的文档注释。随着项目的复杂性对 HTML 和 CSS 代码的耗费可能会很严重）

**待办项目**

用 TODO 标示待办事项和行动项目
强调待办事项只用关键词 TODO，不是其他通用格式比如@@.
附加一个联系方式（名字或邮件列表）在圆括号里，以这样的格式：TODO(联系方式)
附加一个行动项目在分号后比如： TODO:行动项目

```html
{# TODO(john.doe): revisit centerging}
<center>test</center>

<!-- TODO:remove optional tags -->
<ul>
  <li>Apples</li>
  <li>Oranges</li>
</ul>
```

<h3>HTML 样式规则</h3>

**文档类型**

使用 HTML5
HTML5(HTML 句法)被所有的 HTML 文档支持：

```html
<!DOCTYPE html>
```

（这里推荐使用 HTML,HTML 作为 text/html。不要使用 XHTML,XHTML 作为 application/xhtml+xml,缺少浏览器和基础结构的支持以及比 HTML 提供更少的优化空间）

**HTML 合法性**

当需要的时候使用合法的 HTML
使用合理的 HTML 代码除非因为其他的（考虑到文件大小的）遥不可及的目标而让其不能实现
使用工具比如 W3C HTML validator（http://validator.w3.org/nu/）来测试。
使用合法的 HTML 是一个可衡量的基准质量属性，有助于学习有关技术要求和限制，并确保了适当的 HTML 用法

```html
<!-- Not recommended -->
<title>Test</title>
<article>
  This is only a test.

  <!-- Recommended -->
  <!DOCTYPE html>
  <meta charset="utf-8" />
  <title>Test</title>
  <article>This is only a test.</article>
</article>
```

**语法**

根据它的目的使用 HTML
根据它们当初为什么被创建来使用元素（有时不正确的被称为标签“tags”）。例如：使用 header 头部元素来标示头部，p 元素来标示段落，a 元素来标示链接等。
根据 HTML 目的使用它在可访问性，重用性和代码效率（方面）很重要。

**多媒体回调处理**

为多媒体提供替代的内容
对于多媒体，像图片，视频，动态的对象比如 canvas,确保提供了替代访问。针对图片意味着使用有意义的替代文字（alt）以及针对视频和音频提供转录和字幕，如果可能的话。
对无障碍访问提供替代内容是很重要的：一个盲人用户如果没有@alt 的话只有很少的提示来区分什么是图片，其他用户可能无法理解什么是视频或音频内容。
（有些图像的 alt 属性将引入冗余，有些图像的目的纯粹是装饰性的，不能对其立即使用 CSS，没有替代文字，所以就 alt=""）

**关注点分离**

从表现和行为中分离出结构
严格的保持结构（标签），表现（样式），和行为（脚本）分离，并且尽力做到（把）这三者之间的互动（减）到最小值。那就是说，确保文档和模板只包含 HTML 而且（达到）HTML 只用来为结构服务的目的。移动所有表现到样式表，以及移动所有行为到脚本。
此外，通过从文件和模板中链接尽可能少的样式和脚本来保持接触面积尽可能小。
从表现和行为中分离结构对维护来说很重要。和更新样式表和脚本相比，改变 HTML 文档和模板总是更昂贵。

```html
<!-- Not recommended -->
<link href="base.css" rel="stylesheet" media="screen" />
<link href="grid.css" rel="stylesheet" media="screen" />
<link href="print.css" rel="stylesheet" media="print" />

<!-- Recommended -->
<link href="default.css" rel="stylesheet" />
```

**实体参考**

不要使用实体参考
假设同一编码（UTF- 8）是用于文件和编辑器以及团队，这里没必要使用像
&mdash;,&rdquo;, 或者&#x263a;的参考实体。唯一例外（可以）应用于 HTML 中有特殊意义的字符是像<和&，以及控制键或者不可见的字符(像不间断空格)。

```html
<!-- Not recommended -->
The currency symbol for the Euro is “&eur;”.

<!-- Recommended -->
The currency symbol for the Euro is “€”.
```

**可选的标签**

删除可选的标签（可选的）
为了文件大小最优化和性能的目的，（可以）考虑删除可选的标签。HTML5 规范定义了哪些标签可以被删除。
（这次着手处理可能需要一段可以理解的时间来被制定成一个更广泛的指导原则因为 web 开发者被代表性的教导的内容是非常不同的。为了一致性和简单的原因，它最好提供删除所有的可选择的标签，而不仅仅是一个选择。）

```html
<!-- Not recommended -->
<!DOCTYPE html>
<html>
  <head>
    <title>Spending money, spending bytes</title>
  </head>
  <body>
    <p>Sic.</p>
  </body>
</html>

<!-- Recommended -->
<!DOCTYPE html>
<title>Saving money, saving bytes</title>
<p>Qed.</p>
```

**type 属性**

删除 style sheets 和 scripts 中的 type 属性
不要为样式表使用类型属性（除非不使用 CSS），也不要为脚本使用类型属性（除非不使用脚本）
特别说明下这些上下文中的类型（type）属性是不必要的，因为 HTML5 中默认地必然包含 text/css 和 text/javascript。这样做只会（加上 type 属性）对旧的浏览器更安全。

<h3>HTML 的格式化规则</h3>

**通用的格式**

为每一个块，列表，或者表格元素开启一新行，以及为他们的每一个子元素缩进。
每一个元素的样式独立（因为 CSS 允许元素的每个显示属性承担不同的角色）
把每一个块，列表，或表格元素放在一新行。
同样，如果他们是一个块，列表或者表格元素的子元素的话要记得缩进（indent）
(如果你遇到列表项目间有空白的问题，那么把所有的 li 元素放在一行是可以接受的。Linter 鼓励扔警告而不是错误。注：Linter 是一个公用的工具，他可以检查 javascript 文件的样式问题例如操作符的位置，缺少分号，空格，已存在的 jsdoc 注释等更多。详见https://developers.google.com/closure/utilities/ )

<h3>CSS样式规则</h3>

**CSS 合法性**

当可能（需要使用）的时候使用合法的 CSS
除非处理网页验证错误或需要专有的语法，否则使用有效的代码。
使用工具，例如 W3C CSS validator（<a href="http://jigsaw.w3.org/css-validator/" target="_blank">http://jigsaw.w3.org/css-validator/</a>） 来测试。
使用有效的 CSS 是一个可衡量的基准质量属性，（它）允许发现可能不会有任何效果可以被删除的代码，并确保正确的用法。

**ID 和 class 命名**

使用有意义的或者通用的 ID 和 class 名字
不是用表象的或神秘的名字，而是用反映问题中元素目的的 ID 和类名称，否则是其他的通用的（名字）。
名字是具体的，反映元素的目的应该是首选，因为这是最容易理解和最不可能改变的。
通用名称，只是一个后备的元素，和他们的兄弟姐妹比起来没有特别的或不同的意义。他们通常需要为“助手”。
使用功能性或通用性的名称降低文档或模板不必要变化的概率。

```css
/* Not recommended: meaningless */
#yee-1901 {
}

/* Not recommended: presentational */
.button-green {
}
.clear {
}
/* Recommended: specific */
#gallery {
}
#login {
}
.video {
}

/* Recommended: generic */
.aux {
}
.alt {
}
```

**ID 和 class 命名规则**

给 ID 和 class 取一个尽可能短的名字但是如果需要的话也可以尽可能的长
试图传达 ID 或 class 是在说什么的同时尽可能简短。
使用 ID 和类名这种方式有助于理解性和代码效率达到可接受的水平。

```css
/* Not recommended */
#navigation {
}
.atr {
}
/* Recommended */
#nav {
}
.author {
}
```

**类型选择器**

避免定义 ID 和 class 名字的时候和类型选择器冲突
除非必要（例如辅助类），不要结合使用元素名称和 ID 和类 class。
避免不必要的祖先选择器是有用的，因为性能的原因。

```css
/* Not recommended */
ul#example {
}
div.error {
}
/* Recommended */
#example {
}
.error {
}
```

**简略的属性**

当可能的情况下使用简略的属性
CSS 提供了多种速记属性（如字体），应尽可能使用，即使在只有一个值是显式设置的情况下。
使用速记法属性对代码效率和可理解性是有用的。

```css
/* Not recommended */
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
/* Recommended */
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```

**0 和单位**

删除“0”值后的单位说明
不要在 0 值后使用单位，除非他们需要。

```css
margin: 0;
padding: 0;
```

前列的 0
删除值中前列的“0”
不要在-1 和 1 之间值的前面放置“0”。

```css
font-size: 0.8em;
```

**十六进制标记法**

当需要的时候（可以）使用 3 个十六进制标记法字符
颜色值允许它，3 个字符的十六进制记数更短、更简洁。

```css
/* Not recommended */
color: #eebbcc;
/* Recommended */
color: #ebc;
```

**前缀**

在选择器前面加一个特定的前缀
在大型项目以及代码嵌入在其他项目或外部网站时给 ID 和 class 使用前缀（如命名空间）。使用短的，独特的标识符后跟一个破折号。
使用命名空间有助于防止命名冲突，可以使代码维护更容易，例如在搜索和替换操作中。

```css
.adw-help {
} /* AdWords */
#maia-note {
} /* Maia */
```

**ID 和 class 名字的分隔符**

在 ID 和 class 名字中用连字符分割单词
为了提高理解性和性能,请勿在选择器中使用任何字符（包括无所有）以外的字符连接单词和缩略语。

```css
/* Not recommended: does not separate the words “demo” and “image” */
.demoimage {
}

/* Not recommended: uses underscore instead of hyphen */
.error_status {
}
/* Recommended */
#video-id {
}
.ads-sample {
}
```

**Hacks**

为了避免用户代理检测以及 CSS“hacks”,首先尝试一个不同的处理方法
处理在用户代理检测或特殊的 CSS 过滤器，解决方法和 hacks 上的不同样式是吸引人的。为了实现和保持一个有效和易于管理的代码库，这两种方法应被视为最后的手段。另一方面，使检测和黑客自由通行，从长远来看会损害项目，因为项目往往采取阻力最小的途径。那就是说，允许和使使用检测手段和黑客变得更容易意味着使用检测手段和黑客更频繁-同时更加频繁就是太过于频繁。

<h3>CSS的格式化规则</h3>

**声明顺序**

依字母顺序声明
以字母顺序位置放置声明以达到代码连贯且容易记住并维护的方式。
为了排序的目的（可）忽略指定的前缀。然而，一些多个特定的 CSS 前缀属性应保持排序（例如-moz 前缀在- webkit 之前）。

```css
background: fuchsia;
border: 1px solid;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
border-radius: 4px;
color: black;
text-align: center;
text-indent: 2em;
```

**块内容缩进**

缩进所有块内容
所有块内容都要缩进，这是规则的规则，和声明一样，如此以反映层次结构和提高理解性。

```css
@media screen, projection {
  html {
    background: #fff;
    color: #444;
  }
}
```

**结束声明**

在每一个声明后用一个分号
为了一致性和可扩展性的原因，每一个声明后面用分号结束。

```css
/* Not recommended */
.test {
  display: block;
  height: 100px;
}
/* Recommended */
.test {
  display: block;
  height: 100px;
}
```

**结束属性名**

在一个属性名的冒号后用一个空格
为了一致性的原因，在属性和和值之间总是使用一个单一的空格（但在属性和分号之间没有空格）。

```css
/* Not recommended */
h3 {
  font-weight: bold;
}
/* Recommended */
h3 {
  font-weight: bold;
}
```

**声明块分离**

在最后一个选择器和声明之间使用空格
始终在最后一个选择器与开始声明的起始大括号之前使用一个空格
左大括号应该与指定选择器同行

```css
/* Not recommended: missing space */
#video {
  margin-top: 1em;
}

/* Not recommended: unnecessary line break */
#video {
  margin-top: 1em;
}
/* Recommended */
#video {
  margin-top: 1em;
}
```

**选择器和声明分离**

用一个新行来分离选择器和声明
对每一个选择器和声明总是开启一个新行

```css
/* Not recommended */
a:focus,
a:active {
  position: relative;
  top: 1px;
}
/* Recommended */
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}
```

**规则分离**

用开启一新行来分离规则
始终在规则之间空一行。

```css
html {
  background: #fff;
}

body {
  margin: auto;
  width: 50%;
}
```

**CSS 引号**

使用单引号的属性选择器和属性值。
使用单（''）而不是双引号（“”）的属性选择器或属性值。不要使用引号 URL 值(url())。
例外：如果你需要使用@ charset 规则，使用双引号，<a href="http://www.w3.org/TR/CSS21/syndata.html#charset" target="_blank">单引号是不允许的</a>。

```css
/* Not recommended */
@import url("//www.google.com/css/maia.css");

html {
  font-family: "open sans", arial, sans-serif;
}
/* Recommended */
@import url(//www.google.com/css/maia.css);

html {
  font-family: "open sans", arial, sans-serif;
}
```

<h3>CSS Meta规则</h3>

**块注释**

用块注释来给块分组（可选的）
如果可能，通过使用注释来分组样式表区域，再用新行分离区域。

```css
/* Header */

#adw-header {
}

/* Footer */

#adw-footer {
}

/* Gallery */

.adw-gallery {
}
```

我编写 css 时遵循的规则顺序

```css
/* Suggested order:
//显示属性
* display
* list-style
* position
* float
* clear

//自身属性
* width
* height
* margin
* padding
* border
* background

//文本属性
* color
* font
* text-decoration
* text-align
* vertical-align
* white-space
* other text
* content
*/
```
