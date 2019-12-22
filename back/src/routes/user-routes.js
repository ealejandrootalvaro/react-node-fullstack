import { authenticateToken } from '../middlewares';

import {
    getUsers,
    addUser
} from '../users/use-cases';

export default function makeUserRoutes(app) {
    const route = app.Router();
    route.use(authenticateToken);

    route.get("/", async (req, res) => {
        const result = await getUsers();
        res.json(result);
    });

    route.post("/", async (req, res) => {
        console.log("post users req", req.body);
        await addUser({user: req.body});
    });

    return route;
}