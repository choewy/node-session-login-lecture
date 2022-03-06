SET GLOBAL time_zone="Asia/Seoul";
SET time_zone="Asia/Seoul";

CREATE DATABASE service;
USE service
CREATE TABLE IF NOT EXISTS users (
	id varchar(50) NOT NULL,
	name varchar(30) NOT NULL,
	passwd varchar(255) NOT NULL,
	saltkey varchar(255) NOT NULL,
	role tinyint DEFAULT 0 NOT NULL,
	created_at DATETIME DEFAULT NOW() NOT NULL,
	updated_at DATETIME DEFAULT NOW() NOT NULL,
	primary key(id)
);