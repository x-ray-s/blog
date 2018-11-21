---
title: PHP在windows系统下使用mail()

category: notes
---
下载sendmail 地址:http://glob.com.au/sendmail/

配置php.ini

```php
//选择sendmail位置
sendmail_path = "E:\sendmail\sendmail.exe -t"
```

配置sendmail.ini

```php
//smtp服务器地址 用户名 密码
smtp_server=smtp.qq.com
auth_username=
auth_password=
```

> 关于sendmail error log
>
> "Message is missing sender's address" [参考](http://php.net/manual/zh/function.mail.php)
>
> "Connection Closed Gracefully." [参考](http://know.mailsbestfriend.com/sendmail_wamp_server_errors_when_trying_to_send_email--1849283668.shtml)
