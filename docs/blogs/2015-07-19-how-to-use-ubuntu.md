---
title: 如何使用ubuntu操作系统
---
### 更新软件
进入ubuntu software center，然后出现界面，点击左上角Edit，选择software sources，在Download from中选择Other，选择中国的服务器，然后打开终端输入：**sudo apt-get update** 更新系统软件列表。

### 安装界面软件-gnome
sudo apt-get install gnome-panel

### 安装搜狗输入法
打开[搜狗输入法官网](http://pinyin.sogou.com/linux/?r=pinyin)下载安装，终端中输入im-config,选择fcitx，重启电脑，之后在终端中输入fcitx-config-gtk3,选择搜狗输入法。

### 使用代理服务器
下载[shadowsocks-qt5](https://github.com/librehat/shadowsocks-qt5)，配置好代理服务器后，在firefox上安装[AutoProxy](http://fxthunder.com/files/autoproxy.xpi)，配置代理服务器，更新代理规则。
