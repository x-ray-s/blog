---

title: 前端项目管理
---

## 项目结构

在开始一个项目时，首先要对项目的目录结构进行合理的安排，方便以后的开发与维护，良好的结构可以减少了沟通与熟悉项目的时间，维护起来也比较容易，也为日后新进入项目的人能更快投入到工作中做了更好的铺垫。

```javascript
----asset
  ----styles
  ----scripts
  ----images----lib
  --js
  --css
  --font----dist
  ----css
  ----js
  ----img

```

##前端工作流

####我们的需求

code样式(less/sass/stylus)时，自动编译成css文件，添加属性前缀，刷新浏览器，查看样式会定位到预编译样式文件。

code脚本时，检查代码规范性，打包(webpack/browserfiy)，刷新浏览器。

代码上线时，将css,js,images压缩，页面引用替换成压缩后文件并添加md5。

####使用Gulp协助完成工作流

[查看代码](https://github.com/KennyWho/workflow)

执行gulp dev，开发模式的工作流，自动编译预编译与监视文件改动，并刷新浏览器等工作。

执行gulp build后会新建一个新的目录，并将引用的资源复制到新目录中。
