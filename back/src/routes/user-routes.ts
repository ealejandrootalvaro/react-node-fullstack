import { authenticateToken } from '../middlewares';
import express from 'express'
import {
    getUsers,
    addUser
} from '../users/use-cases';

export default function makeUserRoutes(app: typeof express) {

    const route = app.Router();
    route.use(authenticateToken);

    route.get("/", async (_, res) => {
        const result = await getUsers();
        res.json(result);
    });

    route.post("/", async (req, _) => {
        console.log("post users req", req.body);
        await addUser({user: req.body});
    });

    return route;
}