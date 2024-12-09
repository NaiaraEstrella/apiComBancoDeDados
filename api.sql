create database api;
use api;

CREATE TABLE produtos (
id int primary key auto_increment,
nome varchar (50),
quantidade int,
preco float
);