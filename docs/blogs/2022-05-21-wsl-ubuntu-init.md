---
title: 配置 WSL 的 Linux 系统
---

先解决代理问题，否侧包都装不上

```bash
# 查看代理
curl www.google.com
# 设置代理
export all_proxy=http://localhost:1080
# 测试代理
curl ipinfo.io
```

## 命令行

```bash
apt install zsh
# 安装 oh-my-zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

配置代理

```bash
echo "alias proxy='export all_proxy=socks5://localhost:1080'" >> ~/.zshrc
echo "alias unproxy='unset all_proxy'" >> ~/.zshrc
```

复制 ssh key

```bash
cp -R /mnt/c/Users/<username>/.ssh/* ~/.ssh/
chmod 600 ~/.ssh/id_rsa
```

## 环境

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
# 刷新环境变量
source ~/.zshrc
# 安装指定版本的node
nvm install
npm i -g yarn nrm
```
