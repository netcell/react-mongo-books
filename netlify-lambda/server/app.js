const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connected = require('./db.js');
const app = express();

app.use(cors({
	origin: "*"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
// app.use((req, res, next) => {
// 	connected.then(() => next());
// });

module.exports = app;