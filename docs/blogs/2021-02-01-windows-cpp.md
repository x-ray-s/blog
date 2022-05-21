---
title: Windows 配置 C++ 环境
---

# {{$page.title}}

首先安装 `c/c++` 扩展，然后安装 `Mingw-w64`，因为 `SourceForge` 速度不理想，并且下载的是下载进程，而不是直接安装使用，所以使用的是 [MinGW installer](https://osdn.net/projects/mingw/downloads/68260/mingw-get-setup.exe/) 替代。安装好，`apply changes`，然后等待安装包，然后设置系统的环境变量。

使用 `g++ -v` 来验证是否安装成功。

配置 `VS code` 默认生成任务，`ctrl+shift+B` 选择默认的配置来 build 程序。

按照参考中的配置，创建好 `launch.json` 和 `tasks.json`, 建议直接使用 VS Code 直接创建文件，修改对应字段。

`launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "(gdb) 启动",
      "type": "cppdbg",
      "request": "launch",
      "program": "${fileDirname}\\${fileBasenameNoExtension}.exe",
      "args": [],
      "stopAtEntry": false,
      "cwd": "${workspaceFolder}",
      "environment": [],
      "externalConsole": false,
      "MIMode": "gdb",
      "miDebuggerPath": "C:\\MinGW\\bin\\gdb.exe",
      "setupCommands": [
        {
          "description": "为 gdb 启用整齐打印",
          "text": "-enable-pretty-printing",
          "ignoreFailures": true
        }
      ],
      "preLaunchTask": "C/C++: g++.exe 生成活动文件"
    }
  ]
}
```

`tasks.json`

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "cppbuild",
      "label": "C/C++: g++.exe 生成活动文件",
      "command": "C:\\MinGW\\bin\\g++.exe",
      "args": ["-g", "${file}", "-o", "${fileDirname}\\${fileBasenameNoExtension}.exe"],
      "options": {
        "cwd": "C:\\MinGW\\bin"
      },
      "problemMatcher": ["$gcc"],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "detail": "编译器: C:\\MinGW\\bin\\g++.exe"
    }
  ]
}
```

这样就可以使用 Tasks 来 `Run Build Task`, 并且使用 Debug 来调试 cpp

## 参考

- [Using GCC with MinGW](https://code.visualstudio.com/docs/cpp/config-mingw)
