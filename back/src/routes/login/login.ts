export interface LoginProps {
    username: string
}

export interface MakeLoginProps {
    signToken: (token: any) => string 
}

export default function makeLogin({signToken}: MakeLoginProps) {
    return function login({username} : LoginProps) {
        const token = { name: username }
        return signToken(token);
    }
}