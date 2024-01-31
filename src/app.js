import express from 'express';
import routes from './routes.js';
import dotenv from 'dotenv';


dotenv.config();

const app = express();


app.use(express.json());

app.use(routes);

export default app;

// - D sempre que for usar um pacote so para desenvolvimento