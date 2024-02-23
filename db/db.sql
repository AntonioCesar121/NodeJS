create database if not exists userlogin;
use userlogin;
create TABLE users(
    id int auto_increment primary key,
    nameuser varchar(255) not null,
    password varchar(255) not null
);

DESCRIBE users;