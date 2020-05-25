import { Request, Response } from 'express';

export function expressCallback( endpointFunction: any ) {
    return function callEndPointFunction(req: Request, res: Response) {
        try {
            res.json(endpointFunction(req.body));
        } catch {
            res.status(500).send("Prueba")
        }
        
    }
}