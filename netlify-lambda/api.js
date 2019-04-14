require('dotenv').config();
const serverless = require('serverless-http');
const app = require('./server/app.mjs').app;

const booksRoute = require('./server/Routes/Books/index.mjs').booksRoute;
app.use('/', booksRoute);

module.exports = app;
module.exports.handler = serverless(app);