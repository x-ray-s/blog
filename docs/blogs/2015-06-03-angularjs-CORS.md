---
title: AngularJS 跨域请求（CORS）的设置。

category: javascript
---
```javascript
$http({
    method: 'POST',
    url: 'http://yourdomain.com',
    headers: {
      'Content-Type': undefined
    },
    data: data,
    transformRequest: false
});
```

angular中默认使用content-type: application/json,默认不会transformRequest
所以将headers的Content-Type设置为undefined
后端设置允许跨域就可以正常进行跨域请求

```php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
```
