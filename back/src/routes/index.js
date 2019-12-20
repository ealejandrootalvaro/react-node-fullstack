import express from 'express';

import makeLoginRoutes from './login';
import makeUserRoutes from './user-routes';

const app = express();

makeLoginRoutes(app);
app.use("/users", makeUserRoutes(express));

export default app;