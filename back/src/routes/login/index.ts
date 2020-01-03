import makeLogin from './login';
import {signToken} from '../../utils/jwt/jwt-wrapper';
import { expressCallback } from '../../utils/express/express-wrapper';

const login = makeLogin({signToken});

export default function makeRoute(app: any) {
    app.post('/login', expressCallback(login));
}