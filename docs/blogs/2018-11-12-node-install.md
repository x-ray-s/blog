---
title: Node 开发环境安装
---

# {{$page.title}}

## 条件

本文的安装环境系统为 MacOs，如果你在使用 Windows 系统作为 Node 开发环境，那么你要花费更多的时间在配置环境上。

默认你已经可以访问**互联网**，如果还没有，那么你可能需要花费点时间在代理工具上。

## 命令行工具

[iTerm](https://iterm2.com/) + [zsh](https://ohmyz.sh/) 会给你更多的显示信息，和更美观的界面，以及更多的快捷操作。

## 安装 Node

[官网](https://nodejs.org/en/)下载最新的 Node，下载后 `下一步` * N 即可。

测试安装

```bash
node -v
npm -v
```

常用命令

```bash
# 创建 package.json
npm init
# or
npm init -y
# 安装并保存依赖(dependencies)
npm install lodash
npm i lodash
npm i lodash -P
npm i lodash --save-prod
# 保存至开发依赖(devDependencies)
npm i jest -D
npm i jest --save-dev
# 移除
npm uninstall
# 更新
npm update
# 执行scripts
npm run dev
# 查看配置
npm config list
```

更多命令[参考](https://docs.npmjs.com/cli-documentation/)

## 安装 NRM (NPM registry manager)

[NRM](https://github.com/Pana/nrm) 是 NPM 源的管理，因为某些原因，使用 NPM 时，可能需要转换源来下载所需要的包，减少手动设置 registry 的麻烦操作。

```bash
# 安装
npm i nrm -g
# 显示源列表
nrm ls
# 切换淘宝源
nrm use taobao
```

## 安装 NVM (Node version manager)

[NVM](https://github.com/creationix/nvm) 是 Node 版本管理，有些包或者程序需要在特定版本下才能运行，所以需要切换本地的 Node 运行环境。

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
# 安装 node 8
nvm install 8.9.1
# 切换版本
nvm use 8
# nvm 默认执行范围为当前 shell，如果想设置任意 shell 中，可以设置默认版本
nvm alias default 8
```