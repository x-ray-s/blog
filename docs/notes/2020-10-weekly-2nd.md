---
title: 10月 第二周
---

# {{$page.title}}

### Electron

本周替换了 `vue-electron` 维护的 `vuex-electron`，因为这个不更新，并且 blacklist 参数不生效。替换的库为 [MaverickMartyn/vuex-electron](https://github.com/MaverickMartyn/vuex-electron)

### Node

在使用打包程序处理环境变量时候，避免通过方括号访问。

e.g `process.env['NODE_ENV']` 是无法在编译后替换为字符串。

### github webhooks

在 `Setting` 中找到给 `Webhooks`，然后启动一个 webserver，这里使用 `github-webhook-handler` 来作为接受请求的 controller

```js
const http = require('http')
const spawn = require('child_process').spawn
const createHandler = require('github-webhook-handler')
const handler = createHandler({
  path: '/deploy',
  secret: '',
})

http
  .createServer((req, res) => {
    handler(req, res, function(err) {
      if (err) {
        console.error(err)
        res.end('no such location')
        return
      }
      res.statusCode = 404
      res.end('no such location')
    })
  })
  .listen(1234)

handler.on('error', err => {
  console.error('Error:', err.message)
})

handler.on('push', e => {
  try {
    const s = spawn('sh', ['./build.sh'], {
      cwd: `../${e.payload.repository.name}`,
    })
    s.stdout.on('data', data => {
      console.log(`${e.payload.repository.name}: ${data}`)
    })
    s.stderr.on('data', data => {
      console.log(`${e.payload.repository.name}: ${data}`)
    })
    console.log(e.payload.repository.name, 'has rebuild')
  } catch (e) {}
})
```

```bash
#! /bin/bash
git reset --hard origin/master
git clean -f
git pull
npm i
npm run build
pm2 restart frontend

echo 'build end'
```

```nginx
location /deploy {
  proxy_pass http://127.0.0.1:1234;
}
```

### 软件

Git 的图形客户端 `GitKraken` 在付费后就没使用过，偶尔在对比文件和查看文件修改记录时，还会用到，所以找到一个破解的客户端，修改本地 `host` 就可以了。
