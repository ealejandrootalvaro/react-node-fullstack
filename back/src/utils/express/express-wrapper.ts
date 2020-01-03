import { Request, Response } from 'express';

export function expressCallback( endpointFunction: any ) {
    return function callEndPointFunction(req: Request, res: Response) {
        res.json(endpointFunction(req.body));
    }
}