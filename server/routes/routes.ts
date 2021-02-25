import express from 'express';

const Router = express.Router();

import AuthRouter from './auth';

Router.use('/auth', AuthRouter);

export default Router;
