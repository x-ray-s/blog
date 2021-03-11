---
title: FUCK Nextjs
---

# {{$page.title}}

构建 css 文件的方法已经从 `next-css` 转为内部，所以自己写的 `stylus-loader` 不敢轻易升级 10.x 只能使用 9.5.x

版本 9.5.5

### 处理 BasePath

终于支持了 `basePath` [参数](https://nextjs.org/docs/api-reference/next.config.js/basepath)

之前没有这个属性，在自定义路径的时候，需要配合 `Nginx`，比如项目的路径为 **/subdomain/home** ，如果不放在 `/subdomain` 目录下，那么需要在 `Nginx` 去掉 `/subdomain`，但支持 `basePath` 属性后则需要添加 `/subdomain`

```git
server {
    listen 8080;
    charset utf-8;
    location /subdomain/ {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Scheme $scheme;
        proxy_set_header Host $http_host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-Host $http_host;
---     proxy_pass http://localhost:3000/;
+++     proxy_pass http://localhost:3000/subdomain/;
    }
}
```

### 处理 Loader

处理 `webpack` 配置中的默认 loader

添加全局的样式资源

```js
defaultLoaders.sass.push({
  loader: 'style-resources-loader',
  options: {
    patterns: ['./assets/css/variable.sass'],
  },
})
```

处理 `next-babel-loader`, 因为 SWR 中的代码在经过 `babel` 中的编译时，没经过配置的 `.browserlistrc`，所以需要处理一下 `exclude`

```js
config.module.rules.map(rule => {
  if (rule.test && rule.test.source.includes('js')) {
    rule.include.push('/Users/mac/Documents/code/xb-liveroom/node_modules/swr/**/*')
    const origin = rule.exclude
    rule.exclude = function(path) {
      if (/node_modules\/swr/.test(path)) {
        return false
      } else {
        return origin(path)
      }
    }
  }
})
```
