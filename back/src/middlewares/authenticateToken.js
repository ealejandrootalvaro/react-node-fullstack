
export default function makeAuthenticateToken(verifyToken) {
    return function authenticateToken(req, res, next) {
        const token = getAuthToken(req);
        if (token == null) {
            return res.sendStatus(401);
        }
        verifyToken(token, (err, tokenBody) => {
            if (err) {
                return res.sendStatus(403);
            }
            console.log("adding user", tokenBody);
            req.token = tokenBody;
            next();
        })
    }
}

function getAuthToken(req) {
    const authHeader = req.headers['authorization'];
    return authHeader && authHeader.split(" ")[1];
}