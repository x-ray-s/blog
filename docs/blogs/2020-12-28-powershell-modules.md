---
title: 为 PowerShell 安装模块
---

# {{$page.title}}

更新最新的 `PowerShellGet`

```shell
Install-Module -Name PowerShellGet -Force
```

接下来安装模块

```shell
# 高亮
Install-Module -Name PSReadLine -AllowPrerelease
# fzf
Install-Module -Name PSFzf -AllowPrerelease
# git 状态和补全
Install-Module posh-git -Scope CurrentUser
# oh-my-posh
Install-Module oh-my-posh -Scope CurrentUser
# git aliases
Install-Module git-aliases -Scope CurrentUser -AllowClobber
```

修改 `$PROFILE` 文件

> Microsoft.PowerShell_profile.ps1

```shell
Import-Module git-aliases -DisableNameChecking
Import-Module posh-git
Import-Module oh-my-posh
Import-Module PSReadLine
Import-Module PSFzf

Set-PoshPrompt -Theme paradox

Set-PSReadLineOption -PredictionSource History # 设置预测文本来源为历史记录
Set-PSReadLineOption -PredictionViewStyle ListView
Set-PsFzfOption -PSReadlineChordProvider 'Ctrl+f' -PSReadlineChordReverseHistory 'Ctrl+r'
```

设置 git log 中文编码

```shell
setx LESSCHARSET "utf-8"
```

[参考](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.1)
