require('dotenv').config();
const serverless = require('serverless-http');
const app = require('./server/app');

const booksRoute = require('./server/Routes/Books');
console.log(booksRoute)
app.use('/.netlify/functions/api/books', booksRoute);

module.exports = app;
module.exports.handler = serverless(app);