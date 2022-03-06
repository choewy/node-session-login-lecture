'use strict';

const routes = require('express').Router();

routes.use('/auth', require('./auth/router'));

module.exports = routes;