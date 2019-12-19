import makeLogin from './login';
import {signToken} from '../../utils/jwt/jwt-wrapper';

const login = makeLogin(signToken);

export default function makeRoute(app) {
    app.post('/login', (req, res) => {
        const accessToken = login(req.body);
        res.json({ accessToken });
    })
}