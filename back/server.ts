import express from 'express';
import cors from 'cors';
import { Request, Response, NextFunction } from 'express';

import routes from './src/routes';
import {handleError, ErrorHandler} from './src/helpers/error';


const app = express();

app.use(express.json());
app.use(cors());
app.use("/", routes);

app.use((err: ErrorHandler, _req: Request, res: Response, _next: NextFunction) => {
    handleError(err, res);
})

app.listen(3000);