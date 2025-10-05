# 云渲染管理平台
inveta团队打造的企业级管理平台，帮助大家用好云渲染。  
另外团队开源地址像素流管理平台也可以满足绝大多数使用需求  
开源地址 https://github.com/inveta/peer-stream  
有合作请加微信  g0415shenw  源码授权  

# 核心能力
1 完善的日志功能，可以追踪各种异常  
2 分布式部署，可以支持windows、linux以及信创环境  
3 支持公网访问以及渲染服务部署本地  
4 支持管理多个UE实例    
5 支持多个机器、多个显卡的负载均衡  
6 支持UE实例的全生命周期管理（启动、关闭）  
7 支持预加载，更好的用户体验  
8 支持api的二次开发    
9 支持静态网页文件的托管  
10 更多功能开发中

# 使用方法
[PeerStreamEnterprise部署使用](https://github.com/inveta/PeerStreamEnterprise/wiki)


# 更新记录
1 2024-04-01 创建了该工程  
2 2024-04-02 增加了signal.json配置文件定义以及UE管理代码  
3 2024-04-03 完成了全局负载均衡的代码编写  
4 2024-04-04 增加了跨机器的启动UE实例的代码编写  
5 2024-04-18 完成了第一个版本的测试并修复了bug  
6 2024-06-25 增加了连接信息的打印方便调试  
7 2024-06-26 解决了execue重连一直失败的bug  
8 2024-06-29 增加了UE实例的自动释放  
9 2024-06-30 增加了当找不到urlPrefix的时候自动匹配第一个UE实例  
10 2024-06-30 增加了预加载，而且根据每个UE实例单独配置  
11 2024-06-30 增加了webpack打包，将js包打包到一起  
12 2024-06-30 将execue的配置文件放到execue.json中  
13 2024-07-01 修复了webpack打包之后读取json配置文件错误的bug  
14 2024-07-08 解决execue杀进程偶发崩溃的bug  
15 2024-07-08 解决当UE实例的url不符合规则的时候，赋予第一个UE实例的urlprefix   
16 2024-07-08 解决signal.json中ueprogram没有内容，打印为空的bug  
17 2024-07-10 增加了preloadReleaseTime字段，预加载一段时间可以自动释放  
18 2024-07-10 增加了基于koa的框架进行api的处理,并增加了对静态文件托管的处理    
19 2024-07-11 优化了控制台打印，可以打印真实的IP地址  
20 2024-07-12 增加了inveta的第一个介绍api接口，并修复了日志文件路径不对的问题  
21 2024-07-13 改进了execue连接signal的延迟，不再等待10秒之后  
22 2024-07-13 增加了登录、token鉴权、系统配置等api接口，并增加了像素流的访问鉴权  
23 2024-07-14 增加了在线进程查看和杀掉在线进程的api接口  
24 2024-07-19 修改了默认端口大于1000防止linux启动报错，另外解决了linux输入默认IP端口返回not found的问题  
25 2024-07-21 增加了获取服务器的cpu、内存、gpu显存使用率的接口  
26 2024-07-21 增加了跨域的api访问  
27 2024-07-26 修复了有中文路径的时候，无法正确读取静态文件的bug   
28 2024-07-26 增加了UE实例异常断开之后，抛出断线事件给前端进行重连处理  
29 2024-07-26 增加了web的配置界面初版  
30 2024-08-04 增加了对UE4.27的支持  
31 2024-08-07 修复了SignalIp填写不是127.0.0.1导致无法杀掉进程或者进程回收的bug  
32 2024-08-07 修复了启动路径不存在，execue崩溃的bug  
33 2024-08-10 增加了用户鼠标多久不操作就释放三维资源    
34 2024-08-25 增加管理网页UE工程实例的预览接口  
35 2024-08-26 增加了获取像素流网络带宽和网络质量接口  
36 2024-08-26 解决了启动路径不存在，execue崩溃的bug  
37 2024-08-31 增加了分享视频链接的接口  
38 2024-09-01 引入了轻量级数据库sqlite来保存用户的访问数据  
39 2024-09-02 调整了sqlite的引入方式，修改为动态引入  
40 2024-09-07 解决了公网端口映射导致无法kill进程的bug  
41 2024-09-08 增加了对不同服务器不同路径的支持  
42 2024-09-08 增加了UE实例针对指定机器进行负载  
43 2024-09-09 修复了文件网页服务漏洞  
44 2024-09-09 增加了静态网页的限制IP地址访问，提高系统的安全性  
45 2024-11-01 增加了最大码率的配置设置  
46 2024-12-29 增加了白名单的配置，可以只允许特定的IP地址进行访问  
47 2024-12-29 增加了https和wss的支持，可以更加安全的访问  
48 2025-01-03 优化了麒麟系统启动虚幻程序的兼容性问题  
49 2025-01-24 增加了隐藏虚幻鼠标的功能  
50 2025-03-30 增加了自动寻路的算法功能接口  
51 2025-04-04 增加了不同直角坐标系的坐标转换  
52 2025-04-30 增加了严格的UrlPrefix匹配和UE实例的禁用功能  
53 2025-05-02 增加了严格的UrlPrefix匹配和UE实例的禁用功能的配置接口  
54 2025-05-30 增加了execue对wss的支持  
55 2025-05-30 增加了基于wss的方式启动UE实例  
56 2025-05-31 修复了当nginx反向代理时kill客户端失败的bug  
57 2025-07-06 增加了限制同一个IP源的多次访问，每次允许最后一次访问  
58 2025-10-05 支持了UE5像素流的V2版本  




















   



# © MIT License
Copyright (c) 2020-2024 Inveta  

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  




