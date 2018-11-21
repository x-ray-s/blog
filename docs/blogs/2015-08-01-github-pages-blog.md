---
title: 使用github pages搭建博客

category: notes
---

##Getting Started

###创建项目

在github上创建一个名为_username_.github.io的项目

[【参考】](https://pages.github.com/)

###安装Jekyll

1. 安装Ruby,如果是Windows使用[RubyInstaller](http://rubyinstaller.org/downloads/),重启电脑,确保ruby已经添加到系统变量中。

2. 安装[Gem](https://rubygems.org/pages/download#formats).更换[淘宝网RubyGems 镜像](http://ruby.taobao.org/).

3. 安装Bundler,安装过程中可能需要依赖[Development Kit](https://github.com/oneclick/rubyinstaller/wiki/Development-Kit),按照提示安装。

4. 此时你的Jekyll已经安装完成, jekyll -v 测试一下，安装成功后，jekyll serve开启服务。

###使用

####安装Pygments

Jekyll里默认的语法高亮插件是Pygments。它需要安装 Python 并在网站的配置文件_config.yml 里将 highlighter 的值设置为pygments。

安装Python 2.7,设置环境变量后可能需要重启电脑。

####绑定域名

在根目录新建一个名为CNAME的文件并输入你的域名。
如果将主域名绑定在github pages上需要设置A记录，如果将二级域名绑定在github pages上需要设置CNAME。[【参考】](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/)

注：如果需要主域名不带www也能访问，需要设置www CNAME _usernmae_.github.io
