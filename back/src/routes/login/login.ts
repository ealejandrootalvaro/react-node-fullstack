import {checkCredentials} from '../../users/use-cases';

export interface LoginProps {
    username: string
}

export interface MakeLoginProps {
    signToken: (token: any) => string 
}

export default function makeLogin({signToken}: MakeLoginProps) {
    return async function login({username} : LoginProps) {
        checkCredentials(username);
        const token = { name: username }
        return signToken(token);
    }
}