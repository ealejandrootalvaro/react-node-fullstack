import jwt from 'jsonwebtoken';

const ACCESS_TOKEN_SECRET = "prueba"

export function signToken(token) {
    return jwt.sign(token, ACCESS_TOKEN_SECRET);
}

export function verifyToken(token, callback) {
    jwt.verify(token, ACCESS_TOKEN_SECRET, callback);
}