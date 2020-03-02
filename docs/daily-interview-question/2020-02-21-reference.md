---
title: Reference 2020-2-21
---

# Reference

```js
var s = [];
var arr = s;
for (var i = 0; i < 3; i++) {
  var pusher = {
    value: "item" + i
  };
  var tmp;
  if (i !== 2) {
    tmp = [];
    pusher.children = tmp;
  }
  arr.push(pusher);
  arr = tmp;
}
console.log(s[0]);
```

[https://runkit.com/kennywho/reference](https://runkit.com/kennywho/reference)

### 参考

- [Learning how references work in JavaScript](https://medium.com/@naveenkarippai/learning-how-references-work-in-javascript-a066a4e15600)
- [Value vs. Reference](https://www.educative.io/courses/step-up-your-js-a-comprehensive-guide-to-intermediate-javascript/7nAZrnYW9rG)
