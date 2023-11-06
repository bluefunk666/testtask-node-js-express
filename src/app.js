import express from "express";
import bodyParser from 'body-parser';
import balanceRouter from './routers/balanceRoute.js';

const app = express();


app.use(bodyParser.json());
app.use('/update-balance', balanceRouter);



export default app;
