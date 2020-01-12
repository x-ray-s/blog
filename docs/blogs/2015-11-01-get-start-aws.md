---
title: 使用亚马逊云服务
---
亚马逊云服务新注册用户有1年的免费期，在众多云服务器服务中，服务较好，价格较低（免费），有中文语言也就只有这AWS了。

### 注册
首先要到[AWS](https://aws.amazon.com)注册账号

大陆地区访问AWS很慢，所以你需要使用代理。

### 创建EC2实例
找到EC2并创建实例，随后选择操作系统，我选的是 Amazon Linux。

### 安全组
选择默认的安全组，添加入站规则，这样才能通过SSH访问到服务器上。

添加“我的IP”时，注意你现在是否使用了代理。

### 连接实例
这里使用putty连接AWS服务。[这里是一份详尽的帮助](https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/putty.html)

如果遇到连接问题，可以查看[排查帮助](http://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html)
不出意外你已经可以连接你的AWS了

### 安装node

#### 更新
sudo yum update

### 配套编译环境
```c
sudo yum install git
wget https://nodejs.org/download/release/v0.12.7/node-v0.12.7-linux-x64.tar.gz
tar xzf node-v0.12.7-linux-x64.tar.gz
```

接下来参考[Linux主机中node.js开发环境配置](http://blog.fandenggui.com/?p=117)
