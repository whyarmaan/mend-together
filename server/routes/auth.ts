import {authenticate, passportCallback, isAuthRequired} from '../middlewares/isAuth';

import {Router} from 'express';
import {authCallback, logout} from '../controllers/Auth';

const googleAuthRouter = Router();

googleAuthRouter.get('/google', authenticate);
googleAuthRouter.get('/google/callback', passportCallback, authCallback);
googleAuthRouter.get('/logout', isAuthRequired, logout);
googleAuthRouter.get('/test', isAuthRequired, (req, res) => {
    res.json({
        message: 'WORKING!!!!!'
    });
});

export default googleAuthRouter;
