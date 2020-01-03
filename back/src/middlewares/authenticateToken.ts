import { Request, Response, NextFunction } from 'express';

export interface MakeAuthenticateTokenProps {
    verifyToken: (token: any, callback: any) => void
};

export interface RequestWithToken extends Request {
    token: any
}


export default function makeAuthenticateToken({verifyToken}: MakeAuthenticateTokenProps) {
    return function authenticateToken(req: Request, res: Response, next: NextFunction) : Response | void {
        const token = getAuthToken(req);
        if (token == null) {
            return res.sendStatus(401);
        }
        verifyToken(token, (err: any, tokenBody: any) : Response | void => {
            if (err) {
                return res.sendStatus(403);
            }
            console.log(tokenBody);
            //req.token = tokenBody;
            next();
        })
    }
}

function getAuthToken(req: Request) {
    const authHeader = req.headers['authorization'];
    return authHeader && authHeader.split(" ")[1];
}