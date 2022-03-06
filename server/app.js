'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('./src/config/session');
app.use(cors(require('./src/config/cors')));
app.use(cookieParser());
app.use(session());

const routes = require('./src/routes');
app.use("/", routes);
app.set('trust proxy', 1);

module.exports = app;
