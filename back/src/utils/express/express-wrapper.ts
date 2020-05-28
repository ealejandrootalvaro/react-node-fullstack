import { Request, Response, NextFunction } from 'express';

export function expressCallback( endpointFunction: any ) {
    return async function callEndPointFunction(req: Request, res: Response, next: NextFunction) {
        try {
            let response = await endpointFunction(req.body); 
            res.json({
                result: "success",
                response
            });
        } catch(error) {
            next(error);
        }
        
    }
}