---
title: 解决魔兽世界成就追踪问题
meta:
  - name: keywords
    content: wow,魔兽世界,成就追踪,任务追踪
  - name: description
    content: 解决提示 你在同一时间内只能追踪10项成就
---

当你追踪的成就已完成，但追踪并没有被清空，再想追踪新的成就时就会提示“你在同一时间内只能追踪 10 项成就”。

为了解决这个问题，需要

WTF -> 账户 -> (账户名) -> (服务器名) -> (角色名) -> config-cache.wtf

用记事本打开，删除以下两行并保存

```
SET trackedQuests "v "
SET trackedAchievements "v "
```

关闭游戏和战网，重新启动就可以了，如果没生效，请重新检查此文件。
