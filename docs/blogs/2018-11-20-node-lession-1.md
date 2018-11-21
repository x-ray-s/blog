---
title: Node 入门
---

# {{$page.title}}

## 文档

[中文](http://nodejs.cn/api/)

[英文](https://nodejs.org/zh-cn/)

## 常用内建模块

+ path 路径
+ fs 文件系统 (通常会被 fs-extra 包替代)
+ 全局变量
    + __dirname
    + __filename
    + process
+ http (会被各种 Web 框架替代)

对于 Web 开发者来说，使用的开发语言还是 JS，语法以及扩展和工具还是通用的，例如 Lodash，浏览器 API = NODE API，Express 等 Node 框架相当于浏览器中的 jQuery。无需重新适应新语言，只需要熟悉接口就可以开发。


## 通过代码片段学习

```js
const fs = require('fs')
const Path = require('path')
const http = require('http')
const { promisify } = require('util')
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
```

读取一个文件的内容

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Hello world</h1>
</body>
</html>
```

```js
;(async function () {
    const content = await readFile(Path.resolve(__dirname, './index.html'), 'utf8')
    console.log(content)
})()
```

模板文件的替换

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>{{title}}</h1>
</body>
</html>
```

```js
;(async function () {
    const content = await readFile(Path.resolve(__dirname, './template.html'), 'utf8')
    await writeFile('./about.html', content.replace(/{{title}}/g, 'About me'))
})()
```
一个简单的 Web 服务器

```js
;(function () {
    const server = http.createServer(async (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        let file = './index.html'
        if (url.parse(req.url).pathname === '/about') {
            file = './about.html'
        }
        const content = await readFile(Path.resolve(__dirname, file), 'utf8')
        res.end(content)
    })
    server.listen({
        host: 'localhost',
        port: 8080
    })
    server.on('listening', () => {
        console.log(`listen on port 8080`)
    })
})()
```

## 练习

创建一个简单的文件系统，目录结构，创建文件，删除文件，重命名文件，复制文件等

创建一个简单的 Web 服务器，支持 css js 以及 图片。