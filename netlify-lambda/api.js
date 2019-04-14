'use strict';
require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser);

module.exports = app;
module.exports.handler = serverless(app);