---
title: 如何搭建高效（误）舒适的工作环境
---

# {{$page.title}}

## Network & Proxy

使用 Tunnelblick 访问内网权限网络，shadowsocks 访问 GFW  权限外网络。

#### VPN 与 SS 区别

🎙 VPN 虚拟私人网络 是将所有网络网络请求进入远程服务器后流出。

使用外部 VPN 翻墙的问题在于，所有请求都从远端发出，也无法访问公司内网，断开后也存在 DNS 缓存问题。

🎙 SS 是将 HTTP/Socks 请求通过代理模式转发请求。全局模式与 PAC 模式的区别在于，PAC 模式是使用本地或远程 PAC 规则列表进行代理，而全局指代理所有支持的 HTTP 和 SOCKS 请求。有些 SS 客户端也支持默认转换 HTTP 代理。我使用 Privoxy 将 Socks 代理转成 HTTP 代理。

PAC 规则 使用的是 adblock 的过滤[规则](https://adblockplus.org/en/filter-cheatsheet)

使用 SS 时，会遇到即使开了全局模式，应用也无法翻墙，这是因为软件不支持 socks 代理协议。

一句话，VPN 在 IP 层工作，而 SS 在 TCP 层工作。

## Terminal

iTerm + ZSH

#### 常用的包管理工具：

- pip
- gem 配置镜像
- brew
- npm 配置镜像(nrm)
- git / github
- curl

#### ❓ 获取资源过慢、无法访问

💡 命令行工具不支持 socks 代理。 大多数工具都支持 socks 代理，但 wget 不支持。

设置系统代理，使用 `alias` 别名：

```bash
alias proxy='export all_proxy=socks5://127.0.0.1:1080'
alias unproxy='unset all_proxy'
```

可以使用 `curl` 来测试当前 IP

```bash
curl ipinfo.io
```

使用别名，可以简化常用命令行：

```bash
alias chrome_cors='open -n /Applications/Google\ Chrome.app/ --args --disable-web-security --user-data-dir=/Users/kenny/MyChromeDevUserData/'
```

⚠️ 修改 .profile 文件后，需要 `source` 重新载入

使用系统命令，开启一个 Web Server

```python
python -m SimpleHTTPServer 8080
```

- [git alias](https://github.com/robbyrussell/oh-my-zsh/blob/master/plugins/git/git.plugin.zsh)

## Chrome

#### Chrome 的三个版本

- Chrome
- Chrome Canary
- Chromium

每个浏览器都是独立的，可以当做单独的浏览器使用。可以开启登录多个账号，因为 cookie 等存储是独立的。

#### Chrome 隐私模式

使用隐私模式时，是不保存历史记录和存储相关的操作。而且默认的隐私模式是不带有任何扩展的（可配置）。

利用这个特性，可以测试一些保存用户状态的测试，这样不需要频繁的登入与登出，或清理 cookie 等操作。

#### [快捷键](https://support.google.com/chrome/answer/157179?hl=zh-Hans)

- 刷新 cmd + r
- 定位地址栏 cmd + l
- 标签页 cmd + t
- 打开上一次关闭的标签 cmd + shift + t
- 新窗口打开标签页 cmd + n
- 新窗口打开隐身模式 cmd + shift + n
- 后退、前进 alt + ⬅️ ➡️
- 切换书签 cmd + shift + b

#### 实用工具

- 计算器
- 开发者工具
- 原生的截图工具
- 自定义脚本

#### 扩展

⭐⭐⭐⭐⭐

- 书签栏 - jdbnofccmhefkmjbkkdkfiicjkgofkdh
  - 界面优化
  - 自定义位置
  - 记住展开位置
  - 不占显示空间
  - 排序 排序
- 划词翻译 - cajhcjfcodjoalmhjekljnfkgjlkeajl
  - 界面优化
  - 生词薄
  - 显示来源
  -  定时提醒，方便碎片时间的学习
  - 同步单词本
- Gmail - oeopbcgkkoapgobdbedcemjljbihmemj
  - 不占用标签页
  - 未读数与快速查看与发送
  - 基于 Notification API 的桌面提醒
- 历史记录增强 - https://worldbrain.io/
- tampermonkey - dhdgffkkebhmkfjojejmpbldmpobfkfo

⭐⭐⭐⭐

- cookie - fngmhnnpilhplaeedifhccceomclgfbg
- stylish - bldankcfaddopfeelafmbkjboflldjki
- github - pmhfgjjhhomfplgmbalncpcohgeijonh
- json - hdmbdioamgdkppmocchpkjhbpfmpjiei
- oneNote - gojbdfnpnhogfdgjbigejoaolejmgdhk

## POSTMAN

### 变量

### 分组

### 分享

### code
