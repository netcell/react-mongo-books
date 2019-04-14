'use strict';
require('dotenv').config();
const serverless = require('serverless-http');
const app = require('../server/app.mjs');

const booksRoute = require('../server/Routes/Books/index.mjs').booksRoute;
app.use('/books', booksRoute);

module.exports = app;
module.exports.handler = serverless(app);