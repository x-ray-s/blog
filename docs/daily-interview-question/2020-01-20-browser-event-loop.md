---
title: 2020-1-20
---

# Event Loop

## 事件循环

[并发模型与事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)

## 标准规范

[HTML Living Standard - Event loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)

## Event loop

[JS illustrated: The event loop](https://dev.to/kapantzak/js-illustrated-the-event-loop-4mco)

[JavaScript Visualized: Event Loop](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)

只能观察宏任务 ↓

[动画模拟时间循环](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

视频 ↓

[JSconf 2014 - event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ&feature=emb_logo)

## Task, microtask

[Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

## 从入门到放弃

```js
setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(function() {
    console.log("promise1");
  });
}, 0);
setTimeout(() => {
  console.log("timer2");
  Promise.resolve().then(function() {
    console.log("promise2");
  });
}, 0);
```

```js
// node 10.16
timer1;
timer2;
promise1;
promise2;
```

```js
// chrome 79.0
timer1;
promise1;
timer2;
promise2;
```

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

async1();

Promise.resolve().then(function() {
  console.log("promise then");
});
```

```js
// node 10.16
async1 start
async2
promise then
async1 end
```

```js
// chrome 79.0
async1 start
async2
async1 end
promise then
```

是时候放弃了。
