---
title: 记录一个 HTTP 响应头的规则问题
---

# {{$page.title}}

## 发现问题

在使用 Ligthhouse 检查网站优化时，发现 Diagnostics(诊断) 类目下有个 __Serve static assets with an efficient cache policy__ （静态服务资源使用有效的缓存策略），并且提示 **A long cache lifetime can speed up repeat visits to your page. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/cache-policy?utm_medium=devtools&utm_source=lighthouse)**。但问题是在 Network 中已经显示资源 __from disk cache__，这究竟是为什么呢。

现在问题就变成了:
+ 为什么没有设置 `cache-control` 非强制验证缓存，仍然返回 200 from disk cache ?
+ 浏览器在处理没有 `cache-control` 的请求时，使用什么缓存策略 ?

经过搜索得知

[RFC 7234](https://tools.ietf.org/html/rfc7234#section-3) 中描述了浏览器和代理应该有那些默认行为：

> Although caching is an entirely OPTIONAL feature of HTTP, it can be assumed that reusing a cached response is desirable and that such reuse is the default behavior when no requirement or local configuration prevents it. Therefore, HTTP cache requirements are focused on preventing a cache from either storing a non-reusable response or reusing a stored response inappropriately, rather than mandating that caches always store and reuse particular responses.

简单来说，在本地没有配置阻止时，**重用是默认行为**。

并且浏览器的决定缓存响应的新鲜度通常与最后修改时间有关：

> Since origin servers do not always provide explicit expiration times, a cache MAY assign a heuristic expiration time when an explicit time is not specified, employing algorithms that use other header field values (such as the Last-Modified time)... If the response has a Last-Modified header field (Section 2.2 of ([RFC7232](https://tools.ietf.org/html/rfc7234#section-4.2.2)), caches are encouraged to use a heuristic expiration value that is no more than some fraction of the interval since that time. A typical setting of this fraction might be 10%. 

意思就是浏览器会根据比如 `last_modified` 字段，计算时间间隔，并乘以 10% 来计算。

再次 `cache-control` 是没有默认值的，你没有设置就是没有。[【详情】](https://stackoverflow.com/questions/14496694/whats-default-value-of-cache-control)


### 参考

+ [HTTP 缓存](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#invalidating_and_updating_cached_responses)