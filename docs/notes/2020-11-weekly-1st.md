---
title: 11月 第一周
---

# {{$page.title}}

### Web

WhatsApp, Facebook 分享链接的卡片是通过 [ogp.me](http://ogp.me/) 来定义展示效果的。需要在 `<meta>` 标签中定义 `property="og:xxx">` 来设置属性和内容，在 [stackoverflow](https://stackoverflow.com/questions/19778620/provide-an-image-for-whatsapp-link-sharing) 上获取到详细的参考

### Nuxt

使用 `lodash` 时打包即便使用了独立的方法 `lodash/set`，在 `nuxtjs` 中不会被分包，具体原因没有深究，使用 `lodash-es` 解决

### React

使用 `useContext` + `createContext` 来做状态管理。参考了 [unstated-next](https://github.com/jamiebuilds/unstated-next)
