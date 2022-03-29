---
title: 给mysql默认root用户设置密码
---
```mysql
mysql> update mysql.user set password=PASSWORD（'新密码'） where User='root';
mysql> flush privileges;
mysql> quit;
```

修改完成后，找到phpmyadmin/config.inc.php 填入你的密码，清下缓存就可以了。
