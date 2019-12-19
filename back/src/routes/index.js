import express from 'express';
import makeLoginRoutes from './login';
import postRoutes from './posts';

const app = express();

makeLoginRoutes(app);

app.use('/posts', postRoutes);

export default app;