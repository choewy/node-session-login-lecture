const session = require('express-session');
const MysqlStore = require('express-mysql-session')(session);

const mysqlOptions = {
    host: process.env.MYSQL_HOST,
    port: 33062,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWD,
    database: process.env.MYSQL_DB
};

const sessionOptions = {
    key: 'auth',
    httpOnly: true,
    secure: true,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MysqlStore(mysqlOptions),
    cookie: {
        httpOnly: true,
        Secure: true
    }
};

module.exports = () => session(sessionOptions);