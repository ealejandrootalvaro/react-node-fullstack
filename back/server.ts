import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';

import routes from './src/routes';

import { ErrorHandler, handleError } from './src/helpers/error';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", routes);

app.use((err: ErrorHandler, _req: Request, res: Response, _next: NextFunction) => {
    handleError(err, res);
})

app.listen(3000);