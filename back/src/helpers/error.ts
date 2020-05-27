import { Response } from 'express'

export class ErrorHandler extends Error {

    statusCode: number;
    message: string;

    constructor(statusCode: number, message: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

export function handleError(err: ErrorHandler | Error, res: Response) {

    console.log("Error - HandleError")

    if (err instanceof ErrorHandler) {
        res.status(err.statusCode).json({
            status: "error",
            statusCode: err.statusCode,
            message: err.message
        })
    } else {
        res.status(500).json({
            message: err.message
        })
    }    
}


export function propagateError(fn: (...args: any[]) => Promise<any>) {
    return async function(...args : any) {
        return fn(...args).catch((err: ErrorHandler | Error) => {
            console.log("catching from promise");
            if (err instanceof ErrorHandler) {
                throw new ErrorHandler(err.statusCode, err.message);
            } else {
                throw new ErrorHandler(500, err.message);
            }
        });
    }
}

/*export function propagate(fn () => Promise<any>) {
    return async (...args) => fn(...args).catch(err: ErrorHandler | Error => {
        if (err instanceof ErrorHandler) {
            throw new ErrorHandler(err.statusCode, err.message)});
        } else {
            throw new Error(err.message);
        }
}*/