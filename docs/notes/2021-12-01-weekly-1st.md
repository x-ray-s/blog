---
title: 12月 第一周
---

## Windows

用 `wsl2` 的时候使用代理，一直就是访问被拒绝，尝试各种方法，无果，直接切 `wsl1`。也可以在子系统中安装代理，但是 duck 不必。

但是也可以尝试使用本地 ip 代替 localhost 127.0.0.1 , 需要允许代理客户端的防火墙设置以及允许其他设备访问代理（开启外网访问），例如 `shadowsocks-windows` 中的 "Allow other devices to connect" 选项。防火墙中应用名为 `Privoxy`

> In the early stages of WSL 2, we can’t use localhost. We need to use an IP since Linux is inside a VM.
> To access your application currently, we will use an IP.
