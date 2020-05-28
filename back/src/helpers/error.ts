import { Response } from 'express'

export class ErrorHandler extends Error {

    statusCode: number;
    message: string;

    constructor(statusCode: number, message: string) {
        super()
        this.statusCode = statusCode;
        this.message = message;
    }
}

export function handleError(err: ErrorHandler, res: Response) {
    res.status(err.statusCode).json({
        result: "error",
        response: {
            errorCode: err.statusCode,
            description: err.message
        }
    })
}


export function propagateError(fn: (...args: any[]) => Promise<any>) {
    return async function (...args: any) {
        return fn(...args).catch((err: ErrorHandler) => {
            throw new ErrorHandler(err.statusCode, err.message);
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