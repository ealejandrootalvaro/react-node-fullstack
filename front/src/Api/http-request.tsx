import axios, { AxiosInstance} from 'axios';

const host = "http://localhost:3000";

var instance = axios.create({
    baseURL: host
});

export enum ApiResult {
    SUCCESS = "success",
    ERROR = "error"
}

export type ApiError<E> = {
    errorCode: number,
    description: E
}

interface IResponse<S, E> {
    result: ApiResult,
    response: S | ApiError<E>
}

export function get(url: string) {
    return instance.get(url);
}

export function post<S,T>(url: string, body: any) {
    return instance.post<IResponse<S,T>>(url, body);
}


export class APIService<S, E> {
    instance: AxiosInstance; 
    constructor() {
        this.instance = axios.create({
            baseURL: host
        });
    }

    get<S,T>(url: string) {
        return this.instance.get<S,T>(url);
    }

    post<S,T>(url: string, body: any) {
        return this.instance.post<IResponse<S,T>>(url, body);
    }
}
