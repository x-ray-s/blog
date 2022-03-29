---
title: 写给前端工程师的 Node 教程
---

# {{$page.title}}

## 为什么要使用 Node.js

+ 不需要重新学习和适应其他语言，也同样可以完成其他语言完成的目的。
+ Node天生的异步IO处理特性，更适合做IO密集型的业务，对CPU密集型业务没有太大优势，所以node非常适合请求层的处理。
+ 作为辅助工具的使用，处理文件，脚手架，预编译等。

所以 Node 非常适合前端开发工程师学习，也更适合作为前端的脚手架以及请求中间层的开发。

## 关于前后端分离

最原始的 Web 开发流程中，由前端编写 HTML 页面和 CSS 样式，JS 处理一些 DOM 的一些操作，然后又后端将 HTML 插入数据，将 HTML 转换为视图模板。这样的开发流程是先行的，后端数据结构必须依托于前端的页面才能完成。

后来 AJAX 的盛行，前端可以通过 XMLHttpRequest 来发送请求，前端可以在无刷新的情况下获取数据，但是模板还是由后端渲染，没有解决开发流程的问题。

Node 承载渲染服务，由前端自己控制渲染，承接了后端的渲染，这样后端只需要提供数据，完成解耦。

前端框架的出现与单页面 SPA 技术，由于浏览器的 hashChange 和 History 接口的提供，前端具有了控制路由的能力，这样前端完全可以脱离后端的模板，由前端来获取数据并渲染页面，后端只产生数据，这样可以做到前端页面的开发不依赖后端数据，后端的数据生成不依赖于前端的页面，完成了视图与数据的解耦。但由于移动端的普及，一个后端接口可能面向的是多端多业务的，后端无法提供专门的页面请求给 Web 使用。

Node 承接接口转发业务，由于上面产生的接口问题，可以由 Node 作为一个接口转发层，让前端自己来控制想获取的数据，因为只有使用者才最清楚自己想要什么，只需要将自己想获取的数据作为 API 接口，提供给自己使用，这样不仅更好的控制了数据，也降低了多个前端请求在客户端的并发。

## 前端与后端的入门有什么不同

市面上的 Node 教程，多数面向的是后端开发者，从 Node 的 API 讲起，多数前端是对进制，IO，进程，Buffer, Steam，内存管理等后端概念是没有的，基本就是从入门到放弃。其实前端开发最常用的模块也就是 `http` `fs` `path`，这些模块也有成熟的框架替代，只需要明白如何使用成熟的框架 API 就可以，知道如何时候后在逐步对 Node 加深理解。

## 最长使用的依赖库

+ Web框架 `express` `koa2`
+ 处理请求 `axios` `request`
+ 文件处理 `fs-extra` `fs` `path`
+ 进程管理 `pm2` `nodemon`

## Get Start

### 提供一个 Http 服务器

```js 
import Koa from 'koa2'
import Router from 'koa-router'
import views from 'koa-views'
import http from 'http'
import socket from 'socket.io'

// service
const app = new Koa()
const service = http.createServer(app.callback())
const router = new Router()

// middlewares
app.use(views(__dirname + '/views', { extension: 'ejs' }))

// routes
router.get('/', async ctx => {
  await ctx.render('index')
})
app.use(router.routes()).use(router.allowedMethods())

// socket
const p2pserver = require('socket.io-p2p-server').Server
var io = socket(service)
io.use(p2pserver)

const users = []
io.on('connection', function(socket) {
  socket.on('online', (data) => {
    const find = users.findIndex((item) => {
      return item.id === socket.id
    })
    if (find === -1) {
      users.push({
        id: socket.id,
        user: data
      })
    }
    io.sockets.emit('service-online', {users, user: data})
  })
  socket.on('disconnect', function() {
    const find = users.find((item) => {
      return item.id === socket.id
    })
    if (find !== -1) {
      const index = users.indexOf(find)
      users.splice(index, 1)
      socket.broadcast.emit('service-offline', {users, user: find});
    }
    console.log('user disconnected')
  })

  socket.on('service-peer', function(data) {
    console.log('Message from peer: %s', data.msg);
    socket.broadcast.emit('service-peer', data);
  })

  socket.on('go-private', function(data) {
    socket.emit('go-private', data);
  });
})

service.listen(3000)
```

## 未完

## 参考

+ [Node 中文](http://nodejs.cn/api/path.html#path_path_extname_path)
