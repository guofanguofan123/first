#vue_app_000 脚手架
#vue_server_000 服务器
#         db.sql 数据库指定

#功能一:创建用户登录表并且添加数据
#1:进入xz库
USE xz;
#2:创建表 xz_login
#3:添加几列
CREATE TABLE xz_login(
   id INT PRIMARY KEY AUTO_INCREMENT,
   uname VARCHAR(50),
   upwd  VARCHAR(32)
);
INSERT INTO xz_login VALUES(null,'tom',md5('123'));
INSERT INTO xz_login VALUES(null,'jerry',md5('123'));




