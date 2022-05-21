---
title: Event Loop 2020-3-23
---

### 输出什么？

```js
const myPromise = Promise.resolve(Promise.resolve("Promise!"));

function funcOne() {
  myPromise.then(res => res).then(res => console.log(res));
  setTimeout(() => console.log("Timeout!", 0));
  console.log("Last line!");
}

async function funcTwo() {
  const res = await myPromise;
  console.log(await res);
  setTimeout(() => console.log("Timeout!", 0));
  console.log("Last line!");
}

funcOne();
funcTwo();
```

- A: Promise! Last line! Promise! Last line! Last line! Promise!
- B: Last line! Timeout! Promise! Last line! Timeout! Promise!
- C: Promise! Last line! Last line! Promise! Timeout! Timeout!
- D: Last line! Promise! Promise! Last line! Timeout! Timeout!

### 参考

- [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
- [宏任务循环](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
