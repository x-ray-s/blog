---
title: Docker 常用命令
---

# {{$page.title}}


```bash
# 停用全部运行中的容器
docker stop $(docker ps -aq)
# 删除全部容器
docker rm $(docker ps -aq)
# 删除所有无名镜像
docker rmi $(docker images -f "dangling=true" -q)
```