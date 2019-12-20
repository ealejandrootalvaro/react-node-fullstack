import { authenticateToken } from '../middlewares';

import {getUsers} from '../users/use-cases';

export default function makeUserRoutes(app) {
    const route = app.Router();
    route.use(authenticateToken);
    route.get("/", async (req, res) => {
        const result = await getUsers();
        res.json(result);
    });
    return route;
}