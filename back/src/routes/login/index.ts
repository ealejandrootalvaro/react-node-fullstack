import makeLogin from './login';
import express, {Request, Response, NextFunction} from 'express';
import {signToken} from '../../utils/jwt/jwt-wrapper';
import { handleError } from '../../helpers/error';

const login = makeLogin({signToken});


export default function makeLoginRoutes(app: typeof express) { 

    const route = app.Router();

    route.post('/', async (req, res, next) => {
        try {
            const result = await login(req.body);
            res.json(result);
        } catch(error) {
            next(error);
        }
        
    });

    route.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
        handleError(err, res);
    })

    return route;

}