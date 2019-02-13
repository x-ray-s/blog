---
title: 后端问题收集
---

# {{$page.title}}

## Sequelize

+ `Model.findOrCreate` 遇到错误 **Cannot convert undefined or null to object**

```js
TypeError: Cannot convert undefined or null to object
```

数据库定义了自增的字段，但模型中未定义其属性 (autoIncrement) 。

[参考](https://github.com/sequelize/sequelize/issues/9003)

+ `Model.query` 返回 JSON

```patch
model.User.findOne({
    where: {
        id
    },
+    raw: true
})
```

## Typescript

+ 使用 Jest 时，错误信息： **Cannot find name expect**

查看 `tsconfig.js` 中的 `include`

```patch
{
    "include": [
+        "node_modules/@types"
    ],
    "exclude": [
+        "node_modules"
    ]
}
```