import { authenticateToken } from '../middlewares';
import express from 'express';

import {
    getTeams,
    addTeam
} from '../team/use-cases';

export default function makeTeamRoutes(app: typeof express) {

    const route = app.Router();
    route.use(authenticateToken);

    route.get("/", async (_, res) => {
        const result = await getTeams();
        res.json(result);
    })

    route.post("/", async (req, _, next) => {
        try {
            await addTeam({team: req.body});
        } catch(e) {
            next(e)
        }
    })

    return route;

}