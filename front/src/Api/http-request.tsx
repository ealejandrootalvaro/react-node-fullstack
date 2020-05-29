import axios, { AxiosInstance} from 'axios';

const host = "http://localhost:3000";

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

class APIService<S, E> {
    instance: AxiosInstance; 
    constructor(host: string) {
        this.instance = axios.create({
            baseURL: host
        });
    }

    get<S,T>(url: string) {
        return this.instance.get<IResponse<S,T>>(url);
    }

    post<S,T>(url: string, body: any) {
        return this.instance.post<IResponse<S,T>>(url, body);
    }

    setAuthToken(token: string) {
        this.instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

}

export let APIInstance = new APIService(host);

