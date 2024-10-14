




const express = require('express');
const server = express();
const routes = require (`../router/router`);

server.use (`/`, routes);

module.exports = server;
