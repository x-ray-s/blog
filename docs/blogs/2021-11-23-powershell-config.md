---
title: Powershell 7 配置
---

## 有用的命令

```shell
# 获取 powershell 配置文件
$PROFILE | Select-Object *Host* | Format-List
# get-content
gc
# 打开环境变量配置
sysdm.cpl
# 通过命令获取已经安装的模块
Get-Module
```

## 关于 ssh 命令未注册的问题

因为 SSH 所在目录 `C:\Windows\System32\OpenSSH\ssh.exe`，但无法打开此目录，可能是因为你在使用 32 位的 powershell 实例，但是只有 64 位才可以访问 System32 目录，执行下面命令并添加到环境变量中

```shell
# This would only work from a 32-bit PowerShell instance.
# Access the 64-bit C:\Windows\System32 directory.
Get-Item -Force C:\Windows\SysNative\OpenSSH\ssh.exe
```

问题原因在 wsl 中也有解释

> If you're running a 32-bit process in order to access wsl.exe (a 64-bit tool), you may need to run the command in the following manner: C:\Windows\Sysnative\wsl.exe --command.

## git 全局设置

[git 中统一换行符](https://docs.github.com/cn/get-started/getting-started-with-git/configuring-git-to-handle-line-endings)

### 参考

- [迁移 5 到 7](https://docs.microsoft.com/zh-cn/powershell/scripting/whats-new/migrating-from-windows-powershell-51-to-powershell-7?view=powershell-7.2)
- [powershell#11774](https://github.com/PowerShell/PowerShell/issues/11774#issuecomment-582426985)
- [Command reference for WSL](https://docs.microsoft.com/en-us/windows/wsl/basic-commands)
