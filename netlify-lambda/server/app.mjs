import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { mongooseMiddleWare } from './db.mjs';

export const app = express();

app.use(cors({
	origin: "*"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(mongooseMiddleWare);