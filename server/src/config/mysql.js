'use strict';

const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: 33062,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWD,
    database: process.env.MYSQL_DB
});;