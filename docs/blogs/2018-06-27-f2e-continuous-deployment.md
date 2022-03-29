---
title: 前端的持续化集成、部署和发布
---

# {{$page.title}}

## 关于持续化

这里我们不讨论持续化集成 部署 发布 交付的过程与意义，因为现有已有成熟的解决方案，在不同公司项目内也有不同的选择。

## 前端的持续集成

持续 (Continuous)：不断的获取反馈，响应反馈。

集成 (Integration)：编译、测试、打包；

目前前端项目多数都在使用预编译的模式，不管是j s(ts, Browserify, Babel, Rollup) 还是 css(Less, Sass, Stylus)，你的开发文件并不是你最后使用的资源文件。或者你在使用前端的打包工具（Gulp, Webpack, Parceljs），把前端的资源进行预处理。或者你在使用Vue-cli Yeoman Dva等脚手架工具直接快速构建项目，从开发到部署命令应有尽有。但是多个开发者同时开发后需要集成，要么需要人工进行干编译打包过程，要么需要解决编译后的冲突问题。如果想做到持续集成，那么就需要在服务器进行集成。其实就是把你本地打包的命令放在服务器上执行。当然每个公司的发布流程不同，需要根据自己公司情况，去解决问题。比如 Jenkins 上需要在发布命令之前加上你的打包命令。

## 前端的特殊性

### 静态资源上传

因为在浏览器中最后使用的资源都是静态的，那么你的脚本 样式 图片，在上线后极有可能是不在你们的服务器上，而是在 CDN 上。那么需要你在发布之前，把打包好的静态文件上传到你们的静态服务器上。可以在打包流程中，通过 CDN 的上传api 增加上传脚本，也可以确定文件位置后，由运维在服务器上处理。

阿里云OSS Node上传例子

```js
const client = new OSS({
  region: "oss-cn-beijing",
  accessKeyId: "xxxxxxx",
  accessKeySecret: "xxxxxxx",
  bucket: "xxxxxxx"
});

client.put(targetDir, localDir);
```

关于打包 可以是用 gulp-zip 或者 直接使用系统命令

```js
import gulp from 'gulp';
import zip from 'gulp-zip';
import merge from 'merge-stream';
import sequence from 'run-sequence';
gulp.task('tar-static', () => {
  return gulp.src(['temp/dist/**'])
    .pipe(zip('snowball-static.zip'))
    .pipe(gulp.dest('target'));
});
gulp.task('tar-node', () => {
  var views = gulp.src(['temp/views/**'], {
    base: './temp'
  });
  var others = gulp.src(['common/**', 'controllers/**', 'src/template/**', 'src/less/ui/iconfont.less', 'service/**', 'node_modules/**', 'middlewares/**', 'routes/**', 'app.js', 'boot.js', 'process.json', 'package.json', 'config/**'], {
    base: './'
  });
  return merge(views, others)
    .pipe(zip('node.zip'))
    .pipe(gulp.dest('target'));
});
export default (callback) => {
  return sequence(['tar-static', 'tar-node'], callback);
};
```

```js
import gulp from 'gulp';
import del from 'del';
import { exec } from 'child_process';
gulp.task('tar-npm', function (callback) {
  if (process.env.NODE_MODULES_NEED_UPDATE * 1) {
    del.sync('../cache/*.zip', {
      force: true
    });
    exec(`zip -r ../cache/snowball-node-modules-${process.env.NODE_MODULES_CURRENR_MD5}.zip ./node_modules`, { maxBuffer: 'Infinity' }, (error) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      callback();
    });
  } else {
    console.log('Don\'t need to update node_modules cache');
    callback();
  }
});
```


### npm包管理

我经历过很多公司项目，把node_modules也放在代码库中，这会造成如果增加依赖包后，git 的提交记录会非常的大，打包的过程也会很长。考虑到使用这种形式，主要是因为担心 npm install 的时候回因为网络问题，造成构建速度增加。其实你在服务器上通过 npm 下载的时间不见得要比你服务器从代码库拉取的代码并解压速度慢，而且 npm 也是具有缓存功能的，npm@5 或者 yarn 都带有依赖缓存以及不加载重复依赖问题，会大大节省安装时间。况且在没有新工具之前也是 npm-cache 等缓存管理包。如果不使用工具，可以选择解压服务器上的 node_modules.zip, 通过判断 package.json 的 dependencies 来决定是需要 npm i 进行增量更新。

### MD5 

前端项目里的MD5, 为了解决发布后的缓存问题，需要在静态资源的路径进行处理。

使用 webpack 处理MD5 相对简单，只需要在输出文件上加上 [chunkhash]

```js
const webpackConfig = {
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    }
}
```

使用 gulp 时 推荐生成 rev-manifest.json 文件后自行处理

```js
import gulp from 'gulp';
import rev from 'gulp-rev';
import replace from 'gulp-rev-replace';
import sequence from 'run-sequence';
gulp.task('md5-rev', () => {
  // 确保manifest文件路径以dist为根目录
  return gulp.src(['dist/css/**/*.css', 'dist/js/**/*.js'], { base: 'dist' })
    .pipe(rev())
    .pipe(gulp.dest('temp/dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('temp'));
});
gulp.task('md5-replace', () => {
  var manifest = gulp.src('temp/rev-manifest.json');
  return gulp.src('views/**/*', { base: './' })
    .pipe(replace({
      manifest: manifest,
      replaceInExtensions: ['.html', '.pug'],
      prefix: '//URL'
    }))
    .pipe(gulp.dest('temp/'));
});
gulp.task('md5-replace-js', () => {
  var manifest = gulp.src('temp/rev-manifest.json');
  return gulp.src('temp/dist/js/*.js', { base: './' })
    .pipe(replace({
      manifest: manifest,
      replaceInExtensions: ['.js'],
      prefix: '//URL'
    }))
    .pipe(gulp.dest(''));
});

export default (callback) => {
  return sequence('md5-rev', 'md5-replace', 'md5-replace-js', callback);
};

```
## 参考

+ [The Product Managers’ Guide to Continuous Delivery and DevOps](https://www.mindtheproduct.com/2016/02/what-the-hell-are-ci-cd-and-devops-a-cheatsheet-for-the-rest-of-us/)
+ [管理Bucket](https://help.aliyun.com/document_detail/32071.html?spm=5176.11065259.1996646101.searchclickresult.33c4506186BWui)
