import express from 'express';

import makeLogin from './login';
import {signToken} from '../../utils/jwt/jwt-wrapper';
import {expressCallback} from '../../utils/express/express-wrapper';

const login = makeLogin({signToken});


export default function makeLoginRoutes(app: typeof express) { 

    const route = app.Router();

    route.post('/', expressCallback(login));

    return route;

}