---
title: Windows 下使用 redli 作为 redis 客户端
---

# {{$page.title}}

因为 `redis-cli` 使用加密流量的配置过于复杂，使用 `redli` 替换 `redis-cli`。

`redli` 是由 IBM-Cloud 开发的 redis 客户端替代方案，使用 Go 语言开发，支持安全加密流量，无需过多配置。

在 https://github.com/IBM-Cloud/redli/releases 下载压缩包。

```powershell
$ tar -xvzf .\Downloads\redli_0.5.2_windows_amd64.tar.gz -C .\redli\
# 打开环境变量
$ sysdm.cpl

```

编辑 PATH，追加 redli 所在目录，重启命令行工具，使用 `redli` 测试命令。
