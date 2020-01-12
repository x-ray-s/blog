---
title: Mac中开发环境的配置
---

### 购买代理
GFW是阻碍程序员进步的一大因素，所以需要一个代理服务器。
推荐一个我在用的[代理服务器](https://bluecloud.xyz/auth/register?ref=71bf1191)，价格不贵，速度可以，节点比较多。 邀请码: _71bf1191_

下载ss,privoxy.[配置代理](http://localhost:4000/notes/2015/12/02/mac-proxy.html),

### 各种环境
安装iTerm，Atom

为Atom设置代理

```bash
$ apm config set https-proxy https://127.0.0.1:8118
```

PHP使用MAMP PRO，下载后使用MAMP免费版即可。安装composer 以及国内镜像。

安装node，并设置淘宝源

```bash
$ npm config set registry https://registry.npm.taobao.org
```

安装pip

```bash
$ easy_install pip
# jekyll 相关依赖
$ gem install jekyll
$ pip install Pygments
$ gem install pygments.rb
$ gem install bundler
```
[参考](https://help.github.com/articles/using-jekyll-with-pages/)
[参考](https://jekyllrb.com/docs/installation/)

如果出现无法获取的问题，需要设置代理

```bash
$ export http_proxy=http://localhost:8118
```

安装Virtualbox虚拟机与Genymotion

Genymotion如果无法连接，需要设置代理。

安装redis

```bash
# 下载后解压 进入目录后
$ sudo make
$ sudo make test
$ sudo make install

# 修改redis.conf dir .行
$ reids-server /path/to/redies.conf
```
