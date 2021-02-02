---
title: Windows 配置 C++ 环境
---

# {{$page.title}}

首先安装 `c/c++` 扩展，然后安装 `Mingw-w64`，因为 `SourceForge` 速度不理想，并且下载的是下载进程，而不是直接安装使用，所以使用的是 [MinGW installer](https://osdn.net/projects/mingw/downloads/68260/mingw-get-setup.exe/) 替代。安装好，`apply changes`，然后等待安装包，然后设置系统的环境变量。

使用 `g++ -v` 来验证是否安装成功。

配置 `VS code` 默认生成任务，`ctrl+shift+B` 选择默认的配置来 build 程序。

## 参考

- [Using GCC with MinGW](https://code.visualstudio.com/docs/cpp/config-mingw)
