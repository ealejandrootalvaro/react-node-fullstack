import jwt from 'jsonwebtoken';

const ACCESS_TOKEN_SECRET = "prueba"

export function signToken(token: any) {
    return jwt.sign(token, ACCESS_TOKEN_SECRET);
}

export function verifyToken(token: any, callback: any) {
    jwt.verify(token, ACCESS_TOKEN_SECRET, callback);
}