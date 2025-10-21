---
title: 使用 LAN 访问 WSL 2 分发
---

使用管理员开启 powershell 然后从 windows 上就可以访问 wsl 中的服务了

```bash
netsh interface portproxy add v4tov4 listenport=5000 listenaddress=0.0.0.0 connectport=3000 connectaddress=localhost

# 5000 是代理端口 3000 是目标端口
# 可能你已经开启了镜像网络，所以只用 localhost 代替 ip 就可以
```
