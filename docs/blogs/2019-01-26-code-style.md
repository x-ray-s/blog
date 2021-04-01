---
title: 编程风格指南
---

# {{$page.title}}

## 代码风格

确定自己和团队的代码风格，有利于团队内的协作与沟通，在 review 代码和共同协作同一个业务时，相同的代码风格更容易让人理解。以下作为参考：

[Airbnb Javascript Style](https://github.com/airbnb/javascript)

[Airbnb CSS Style](https://github.com/airbnb/css)

[Google JSON 风格指南](https://github.com/darcyliu/google-styleguide/blob/master/JSONStyleGuide.md)

## 设计指南

为了保证在一个项目(公司)内，不同的开发职能部门能顺利的沟通，一个良好的流程和一个符合业界标准的规范不可或缺。作为 Web 开发，这里提供一份 http 接口设计和 RESTFUL 设计的参考。

[HTTP 接口设计](https://github.com/bolasblack/http-api-guide)

[RESTFUL API 设计参考](https://github.com/aisuhua/restful-api-design-references)

## 命名约定

命名上的约定，可以让命名更为统一，表达和描述更为清晰，容易理解。这里参考 谷歌的 C++ 命名指南：

[Google C++ 风格指南](https://zh-google-styleguide.readthedocs.io/en/latest/google-cpp-styleguide/naming/)

下面列举一下常见的命名问题：

+ ❌ 错误的单词拼写

colse, laod

这种问题应该避免，最有效的手段就是 review 代码。

+ ❌ 风格上的不一致

bG List payRecordPageNo NotAThing

驼峰与下划线都是可以选择的，但是应该避免在同一个类型上使用不同的命名规则。举个例子，比如变量名统一使用下划线，函数使用驼峰，但不能在变量上既使用驼峰又使用下划线。

+ ❌ 含糊不清的缩写

JConTop ZConTop VCont con

不要使用模糊不清的描述和缩写。别说其他人看不懂，时间久了，你自己也看不懂。

+ ❌ 重复的描述

userCenterPage - views/userCenter

doLogin - login

NotAThing - none

shareFor - share

goback - back

减少重复性的描述，描述要做到简单扼要，描述清晰，使用分类来整理结构，使用层级来表示嵌套关系

+ ❌ 无意义的描述和错误的描述

liClick 并不能表达清晰，命名并不是只作为一个标识，而是具有意义的标识

.left { display: flex; } 命名与表述不一致。


### 关于工具和辅助类的使用

通过附加全局通用的选择器来增加样式，可以增加表述，也减少了表现层的代码。但工具类作为全局样式，如作为嵌套命名标识，这不符合设计的初衷。工具和辅助类是帮助在结构中增加表现，来减少在表现层中的干涉。但在表现层用工具和辅助的类名作为标识，1.是增加了嵌套关系。2.是不符合语义化。

举个例子。
```css
.left {
  float: left;
}
.payment-hd .left {
  color: #000
}
```
首先 `.left` 作为 `layout` 的辅助类。它的功能仅限于将 `float: left`，并且是一个属于布局的类，而不具有任何其他的意义。如果想定位的只是一个模块，远不如命名一个 `.payment-hd-lf` 或者直接使用 `.payment-hd > div` 要合适，不仅减少了嵌套，而且在维护上，我只需要关注这个选择器的规则，而不需要关注是否有其他规则的影响。

还有个重要的问题，从命名和语义上来讲 `.left` 并不合适，而是 `float-left` 或 `float-lf`。

关于命名与模块划分下面给出两个参考，当然你也可以从任何你喜欢的框架中找到相似的点。

[Bootstrap Utilties](https://getbootstrap.com/docs/4.2/utilities/borders/)

[Vuetify Helper Class](https://vuetifyjs.com/zh-Hans/framework/display)
---

关于 CSS 架构设计的差异：

[6种组织CSS的方法](https://zhuanlan.zhihu.com/p/28085207)

## 项目结构

一个常见的项目结构

+ 源码
    + 视图
    + 数据
    + 组件
    + 路由
    + 工具类
+ 包引用
+ 静态文件
+ 配置
+ 可执行脚本
+ 文档
+ 生成代码

## 确定所属关系

不管是 BEM 命名方式，RESTFUL 定义一个 URL，还是给文件夹分类，schema 数据格式，其实都是为了让命名更为简单且能描述清晰，层级来表达所属关系，并且通过相同名称归为一类，这样可以达到一个分类和结构化的目的。


通过使用文件夹来分类并简化所属关系：

```bash
❌
QnaAlipay_detail_a.vue
QnaAlipay_detail_b.vue
...
QnaAlipay_detail_g.vue

✅
QnA/alipay/detail_a.vue

❌
components/newUserCentePage
✅
views/newUserCenter
views/userCenter
views/user/center
views/center
```


通过嵌套来结构化数据和表述所属关系：

```json
// 扁平化地址
{
  "company": "Google",
  "website": "http://www.google.com/",
  "addressLine1": "111 8th Ave",
  "addressLine2": "4th Floor",
  "state": "NY",
  "city": "New York",
  "zip": "10011"
}
// 结构化地址：
{
  "company": "Google",
  "website": "http://www.google.com/",
  "address": {
    "line1": "111 8th Ave",
    "line2": "4th Floor",
    "state": "NY",
    "city": "New York",
    "zip": "10011"
  }
}
```