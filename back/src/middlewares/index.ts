import makeAuthenticateToken from './authenticateToken';
import { verifyToken } from '../utils/jwt/jwt-wrapper';

export const authenticateToken = makeAuthenticateToken({verifyToken});