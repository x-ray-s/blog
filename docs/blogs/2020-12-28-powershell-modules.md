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
Import-Module PSReadLine
# git 状态和补全
Install-Module posh-git -Scope CurrentUser
# oh-my-posh
Install-Module oh-my-posh -Scope CurrentUser
# git aliases
Install-Module git-aliases -Scope CurrentUser -AllowClobber
```

修改 `$Profile` 文件

> Microsoft.PowerShell_profile.ps1

```
Import-Module posh-git # 引入 posh-git
Import-Module oh-my-posh # 引入 oh-my-posh
Import-Module git-aliases -DisableNameChecking

Set-Theme Paradox # 设置主题为 Paradox

Set-PSReadLineOption -PredictionSource History # 设置预测文本来源为历史记录

Set-PSReadlineKeyHandler -Key Tab -Function Complete # 设置 Tab 键补全
Set-PSReadLineKeyHandler -Key "Ctrl+d" -Function MenuComplete # 设置 Ctrl+d 为菜单补全和 Intellisense
Set-PSReadLineKeyHandler -Key "Ctrl+z" -Function Undo # 设置 Ctrl+z 为撤销
Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward # 设置向上键为后向搜索历史记录
Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward # 设置向下键为前向搜索历史纪录
```

设置 git log 中文编码

```shell
setx LESSCHARSET "utf-8"
```
