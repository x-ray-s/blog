---
title: 5月 第四周
---

## CSS

更新 `postcss@8` 主要是配置的更改，不在支持 function 和 require，[详情](https://evilmartians.com/chronicles/postcss-8-plugin-migration)

不再使用 `stylus`, 因为 `next@^10` 之后不再提供官方的 `stylus` 支持。

尽量不要在 `sass` 中使用带有 `path` 的 `@mixin`, 因为 sass 的缺少 rewrite-url 功能的缺陷，需要使用 `resolve-url-loader` 解决。

## 系统

[升级 WLS 2](https://codefellows.github.io/setup-guide/windows/) 挂载 ext 分区的硬盘 [详情](https://docs.microsoft.com/en-us/windows/wsl/wsl2-mount-disk)

设置 powershell 打开的目录 [https://docs.microsoft.com/zh-cn/windows/terminal/customize-settings/profile-general#starting-directory]

## Android

修改 Gradle 的镜像配置

```groovy
def repoConfig = {
    all { ArtifactRepository repo ->
        if (repo instanceof MavenArtifactRepository) {
            def url = repo.url.toString()
            if (url.contains('repo1.maven.org/maven2') || url.contains('jcenter.bintray.com')) {
                println "gradle init: (${repo.name}: ${repo.url}) removed"
                remove repo
            }
        }
    }
    // maven { url 'http://mirrors.cloud.tencent.com/nexus/repository/maven-public/' }
    maven { url 'https://maven.aliyun.com/repository/central' }
    maven { url 'https://maven.aliyun.com/repository/jcenter' }
    maven { url 'https://maven.aliyun.com/repository/google' }
    maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }
}

allprojects {
    buildscript {
        repositories repoConfig
    }
    repositories repoConfig
}
```

关于 Android/Flutter Webview 的 http 支持 [https://developer.android.com/training/articles/security-config?hl=zh-cn]

## Puppeteer

安装绕过下载和指定 Chromium

```bash
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1
export PUPPETEER_EXECUTABLE_PATH=/Applications/Chromium.app/Contents/MacOS/Chromium
```
