---
title: 后端问题收集
---

## Sequelize

- `Model.findOrCreate` 遇到错误 **Cannot convert undefined or null to object**

```js
TypeError: Cannot convert undefined or null to object
```

数据库定义了自增的字段，但模型中未定义其属性 (autoIncrement) 。

[参考](https://github.com/sequelize/sequelize/issues/9003)

- `Model.query` 返回 JSON

```git
model.User.findOne({
    where: {
        id
    },
+    raw: true
})
```

- 强制删除 Model `Model.sync({ force: true })`

## Typescript

- 使用 Jest 时，错误信息： **Cannot find name expect**

查看 `tsconfig.js` 中的 `include`

```git
{
    "include": [
+        "node_modules/@types"
    ],
    "exclude": [
+        "node_modules"
    ]
}
```

## Joi 验证

- 验证可选值时

```js
allowUnknown: true
```

- 跳过可选值

```js
stripUnknown: true
```

- 单个可选值

```js
Joi.optional()
```

- 允许对象为空

```js
payload: Joi.object({
  name: Joi.string(),
}).allow(null)
```
