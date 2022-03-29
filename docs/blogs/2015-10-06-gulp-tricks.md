---
title: Gulp guide for beginners
---

##这是一篇简单又实用的 gulp 指南
使用简单的代码示例让你快速入手 gulp

###WHY GULP
Code less, Do more.

###需求
在开始之前，简单描述一下我们的构建需求。

- 一个本地服务 http server
- 编译工具，less/sass/stylus coffee jade...
- 辅助工具，代码检查，自动前缀，sourcemaps...
- 刷新浏览器，当文件发生改变时即时刷新你的浏览器。
- 发布之间的一些工作，合并，压缩，混淆...

###START
你需要了解[基本的 gulp 使用](http://www.gulpjs.com.cn/)

下面我们谈一下上面没有提到的一些使用与技巧。

####复制目录下所有文件包括子目录

```javascript
gulp.task("copy", function() {
  return gulp.src("./path/from/yours/**/*").pipe(gulp.dest("./path/to/yours/"));
});
```

####阻止错误抛出
在 stream 中发生一个错误的话，它会被直接抛出，阻止错误抛出可以使用 gulp-plumber.

```javascript
gulp.task("less", function() {
  gulp
    .src("asset/styles/*.less")
    // prevent pipe breaking caused by errors
    .pipe(plumber())
    .pipe(less())
    // less中发生错误将不会中断gulp的执行
    .pipe(gulp.dest("dist/css/"));
});
```

####只发送被更改文件
当一个文件被更改时，只想发送被更改文件到 pipe 中，可以使用 gulp-watch 插件，也可以使用 gulp.watch().

```javascript
gulp.watch("asset/styles/*.less", function(event) {
  gulp
    .src(event.path)
    .pipe(less())
    .pipe(gulp.dest("dist/css/"));
});
```

####多个 js 文件需求使用 browserify 分别打包
如果你的项目中需要多个 js 使用 browserify 分别打包，可以创建一个文件 map,遍历 map 执行 browserify.bundle().

```javascript
var files = [
  {
    input: "app.js",
    ouput: "app-bundle.js"
  },
  {
    input: "app2.js",
    ouput: "app2-bundle.js"
  }
];
files.forEach(function(file) {
  var browserify = browserify({
    debug: true
  });
  browserify.add(file.input);
  browserify.bundle();
});
```

###browserify 中引入模板
使用 stringify

```javascript
browserify.transform(stringify);
```

###使用 child_process 自动重启 gulp
gulpfile 更改后需要重启 gulp，使用 gulp_process 开启子进程可以自动重启 gulp

```javascript
var spawn = require("child_process").spawn;
var kill = require("tree-kill");
var gulpProgram = process.platform === "win32" ? "gulp.cmd" : "gulp";
gulp.task("auto-reload", function() {
  var process;

  function restart() {
    if (process) {
      kill(process.pid, "SIGKILL");
    }
    process = spawn(gulpProgram, ["dev"], {
      stdio: "inherit"
    });
  }

  gulp.watch("gulpfile.js", function() {
    restart();
  });
  restart();
});
```
