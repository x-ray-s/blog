---
title: 一份项目内使用的的readme参考
---

> 引用

## 安装以及启动

不需要修改 hosts 文件，浏览器中打开<http://localhost:7878>。如果使用域名，则需要把域名指向本地，端口设置为 80，浏览器中打开<http://\<PROJECT\>.com>。

安装 yarn

```js
npm install
npm install -g nodemon & babel-cli
npm run dev
```

## 开发模式

执行命令结束后，浏览器中打开<http://localhost:3000>

注：js 与 less 的编译文件为 `['js/*.js', 'js/**/index.js', 'less/*/*.less', 'less/**/index.less']`

```
npm run dev---- or ----
gulp dev
```

## 风格指南

css 规范 <https://github.com/airbnb/css>

js 规范 <https://github.com/airbnb/javascript>

注释规范 <http://usejsdoc.org/>

vscode 注释支持 <https://github.com/Microsoft/TypeScript/wiki/JsDoc-support-in-JavaScript>

编辑器格式化配置 <http://editorconfig.org/>

## CSS 命名规范

使用 BEM(block**element**modifier)命名规范，为避免样式覆盖，禁止.class 选择器单独使用，可嵌套在符合 BEM 规范的选择器内，作子选择器使用。避免嵌套过多选择器，非重用模块除外。

```
.banner ❌
.home__banner ✅

.close ❌
.modal__login .close ✅
```

## js 检查

使用 prettier 作为 formatter，eslint 作为 lint。

vscode 插件：

- Prettier
- EditorConfig for VS Code
- ESLint
- Vetur
- Pug snippets

settings.json 配置

```
"eslint.validate": [ "javascript", "javascriptreact", "html", "vue" ],
"prettier.eslintIntegration": true,
"prettier.stylelintIntegration": true
```

```
sudo gulp formatter
```

vue 使用 eslint-plugin-vue 格式化代码，js 文件使用 eslint --fix 格式化。
编辑器内可使用 prettier 插件。

```
  > format document
```

## 项目结构

```
common/ -- 后端或前后端通用js
controllers/ -- 前后端控制器
dist/ -- src编译后生成文件
doc/ -- 文档
middlewares/ --服务端中间件
node_modules/
routes/ -- 服务端路由
service -- 服务端代码
src/ -- 预编译文件
  js/
    util/ --引用工具包
    lib/ --单独引用库
  less/
    ui/ --通用ui
    common --只做注入css
  vue/
    components/ --组件
    controls/ --api
    mixins/ --混合
    pages/ --页面级single file
    routes/ --路由
    bus.js --事件中间
    domControl.js --vue中dom控制
    web.js --入口文件
    mobile.js --mobile入口
static/ -- 静态文件
target/ -- 压缩包文件
tasks/ -- 工作流任务
  .eslintrc.json -- 工作流eslint所需的配置
temp/ -- 打包临时目录
views/ -- 视图
tools/ -- 工具类
  pr.js -- 提交pr任务
app.js
boot.js -- 启动文件
gulpfile.babel.js
process.json -- PM2配置
yarn.lock
```

## 路由

路由尽量与文件目录相符，路由文件与视图文件对应。

## 视图

- h5 - m.pug mobile.pug
- hybird - h.pug hybird.pug
- web - index.pug

## 全局变量

```
ctx.state.user {Object} - 当前登录用户
ctx.state.isLogin {Boolean} - 当前登录状态
ctx.state.ua {Object} - ua信息

global.cookieOptions - cookie设置
global.<PROJECT>_OAUTH - 认证信息
```

```
window._LOGIN {Boolean} - 是否登录
window._USER {Object} - 当前登录用户信息
```

## Cookie

页面之间的传递临时变量尽量使用 session，存储非敏感信息使用 storage，频繁使用的 http 状态使用 cookie。

```
<PROJECT>_a_token //access token
<PROJECT>_r_token //refresh token
<PROJECT>_is_login //login state
u //uid 以及 匿名生成的uid
remember // 记住密码
```

## FBI WARNING

- vue 的挂载点为 dom 最顶层，所有 dom 操作应在 vue mount 生命周期之后。提供一个'vue-ready'事件，观察者函数单次载入，多次会覆盖之前的绑定。
- gulp 任务新增依赖后，需要手动清空部署机的 cache 文件。
- 某些 XMLHttpRequest POST 请求返回 400 错误，需使用$.csrf 发送请求，包装了请求 token 的逻辑。
- 关于请求跨域。开发模式中 xmlHttpRequest 通过 cors.js 由本地转发至线上。线上设置 cors 头或 nginx 把二级域名代理到\<PROJECT\>.com 完成。

## 线上日志

## 编译机，部署机

## 提交 PR

```
node tools/pr.js -a ${assign_id} -t ${target_branch}
```

## 查看 PR 相关

```
node tools/pr.js
```
