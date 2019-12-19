import dotenv from 'dotenv';
import express from 'express';

import routes from './src/routes';

dotenv.config();
const app = express();

app.use(express.json());
app.use("/", routes);

app.listen(3000);