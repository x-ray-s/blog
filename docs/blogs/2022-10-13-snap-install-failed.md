---
title: WSL2 Ubuntu 20.04.3 snap 安装问题
---

# {{$page.title}}

执行 `sudo snap install zig --beta --classic` 时遇到

```bash
error: cannot communicate with server: Post http://localhost/v2/snaps/zig: dial unix /run/snapd.socket: connect: no such file or directory
```

使用此 [https://github.com/microsoft/WSL/issues/5126](issues) 修复
