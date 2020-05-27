import express from 'express';

import makeLoginRoutes from './login';
import makeUserRoutes from './user-routes';
import makeTeamRoutes from './team-routes';

const app = express();

app.use("/login", makeLoginRoutes(express));
app.use("/users", makeUserRoutes(express));
app.use("/teams", makeTeamRoutes(express));

export default app;