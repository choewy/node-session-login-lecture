# node-session-login-lecture

## database

- MySQL(docker container)
- PORT : 33062

```
$ docker-compose up -d
```

## server

- Node.js(express)
- .env

```
CORS_ORIGIN=http://localhost:3000

SESSION_SECRET=SessionSecretKey

MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWD=root
MYSQL_DB=service
```

- run

```
$ cd server
$ npm install
$ npm run start
```

## client

- React.js
- run

```
$ cd client
$ npm install
$ npm run start
```