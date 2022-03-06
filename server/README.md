# server

## API

- register : POST /auth/login
- login : POST /auth/login
- logout : POST /auth/logout
- check : GET /auth

## structure

- root : `./`

```
/bin
    www.js(run)
/src
    /util
        crypto.js
    /config
        cors.js
        mysql.js
        session.js
    /models
        /mybatis
            index.xml
            index.js
    /routes
        index.js
        /auth
            router.js
            controller.js
app.js
```

## setting

- `.env` file

```
CORS_ORIGIN=http://localhost:3000

SESSION_SECRET=SessionSecretKey

MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWD=root
MYSQL_DB=service
```