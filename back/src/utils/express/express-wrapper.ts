import { Request, Response } from 'express';

export function expressCallback( endpointFunction: any ) {
    return async function callEndPointFunction(req: Request, res: Response) {
        res.json(await endpointFunction(req.body));
    }
}