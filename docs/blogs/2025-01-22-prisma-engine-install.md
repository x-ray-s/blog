---
title: Prisma 下载失败或下载慢的解决方案
---

在腾讯云主机上遇到了 Prisma 下载失败或下载速度非常慢，但是可以访问 `binaries.prisma.sh`

具体错误为:

> Downloading Prisma engines for Node-API for xxx

通过设置 `PRISMA_ENGINES_MIRROR` 无果，所以决定手动下载 prisma engine.

下载地址的规则为:

```
host + commitid + platform + filename
```

通过 [prisma-engines](https://github.com/prisma/prisma-engines/tags) 仓库，找到对应版本的 commitid

通过 [prisma binaries](https://www.prisma.io/docs/orm/reference/prisma-schema-reference#binarytargets-options) 找到 platform 名称

下载文件，这里我是下载的 `debian-openssl-1.1.x` 的文件，并使用了淘宝镜像源

```bash
wget https://registry.npmmirror.com/-/binary/prisma/all_commits/4123509d24aa4dede1e864b46351bf2790323b69/debian-openssl-1.1.x/libquery_engine.so.node.gz
wget https://registry.npmmirror.com/-/binary/prisma/all_commits/4123509d24aa4dede1e864b46351bf2790323b69/debian-openssl-1.1.x/schema-engine.gz
wget https://registry.npmmirror.com/-/binary/prisma/all_commits/4123509d24aa4dede1e864b46351bf2790323b69/debian-openssl-1.1.x/prisma-fmt.gz
wget https://registry.npmmirror.com/-/binary/prisma/all_commits/4123509d24aa4dede1e864b46351bf2790323b69/debian-openssl-1.1.x/query-engine.gz
```

解压文件

```bash
gzip -d libquery_engine.so.node.gz
gzip -d schema-engine.gz
gzip -d prisma-fmt.gz
gzip -d query-engine.gz
```

设置环境变量，放入 `~/.zshrc` 或 `~/.bashrc` 文件中

```bash
# 这是我的下载目录
export WGET_DIR="$HOME/prisma-engine"
ENGINE_DIR="${WGET_DIR}"
export PRISMA_QUERY_ENGINE_LIBRARY="${WGET_DIR}/libquery_engine.so.node"
export PRISMA_QUERY_ENGINE_BINARY="${WGET_DIR}/query-engine"
export PRISMA_SCHEMA_ENGINE_BINARY="${WGET_DIR}/schema-engine"
export PRISMA_FMT_BINARY="${WGET_DIR}/prisma-fmt"
```

设置可执行权限，因为 prisma 要使用外部的二进制文件执行

```bash
chmod 777 -R prisma-engine
```

这样启动 `prisma` 命令时，会使用对应的 engine 文件
