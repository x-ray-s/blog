---
title: Windows 自定义协议
---

# {{$page.title}}

在 Windows 中想通过自定的 URI Scheme 打开桌面应用程序，如 `x-ray://` 打开指定的程序，可以通过添加注册表的方式来完成。

过程参考 [Registering an Application to a URI Scheme](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/aa767914(v=vs.85)?redirectedfrom=MSDN>)

### 手动创建注册表

我们先手动创建一个注册表，使用一个自定的 protocol 打开指定的应用程序。

1. `win + R` 运行 `regedit` 打开注册表
2. 在 `HKEY_CLASSES_ROOT` 下 新建 -> 项 这里我使用 `x-ray` 作为协议名称
3. 键值关系
    - (默认) : URL
    - URL Protocol : 空
4. 以此创建子项 shell -> open -> command
5. 修改 command 默认项值 为指定应用启动项。

例：

```
C:\Program Files (x86)\Google\Chrome\Application\chrome.exe --new-window www.baidu.com
```

这样我们在浏览器中访问 `x-ray://` 就可以使用 Chrome 打开百度

### 使用 NSIS 脚本创建注册表

知道注册表的字段后，我们可以使用 NSIS 脚本自动创建注册表，模板如下

```
!macro customInstall
  DetailPrint "Register __scheme__ URI Handler"
  DeleteRegKey HKCR "__scheme__"
  WriteRegStr HKCR "__scheme__" "" "URL:__scheme__"
  WriteRegStr HKCR "__scheme__" "URL Protocol" ""
  WriteRegStr HKCR "__scheme__\DefaultIcon" "" "$INSTDIR\${APP_EXECUTABLE_FILENAME}"
  WriteRegStr HKCR "__scheme__\shell" "" ""
  WriteRegStr HKCR "__scheme__\shell\Open" "" ""
  WriteRegStr HKCR "__scheme__\shell\Open\command" "" "$INSTDIR\${APP_EXECUTABLE_FILENAME} %1"
!macroend
```

使用你自己的协议名替换 `__scheme__`
