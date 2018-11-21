---
title: 解决：WAMP Service localhost显示404 Not Found

category: notes
---
本地开发环境设置了虚拟主机，localhost无法访问，显示404 Not Found,需要在httpd-vhosts.conf中增加localhost，修改如下：

```c

<VirtualHost *:80>
    DocumentRoot "E:\wamp\www\virtual"
    ServerName yourdomain.com
    #ServerAlias yourdomain.com
</VirtualHost>

<VirtualHost *:80>
    ServerAdmin webmaster@dummy-host.localhost
    DocumentRoot "E:\wamp\www"
    ServerName localhost
    ServerAlias localhost
    ErrorLog "logs/dummy-host.localhost-error.log"
    CustomLog "logs/dummy-host.localhost-access.log" common
</VirtualHost>

```
