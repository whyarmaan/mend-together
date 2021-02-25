import passport from 'passport';
import {NextFunction, Request, Response} from 'express';

export const isAuthRequired = (req: Request, res: Response, next: NextFunction): void | Response => {
    console.log('AM IN');
    return req.user ? next() : res.status(401).json({
        message: 'UnAuthorized!'
    });
};

export const passportCallback = passport.authenticate('googleOauth', { failureRedirect: '/auth/google', failureFlash: true });

export const authenticate = passport.authenticate('googleOauth', { scope: [
        'profile',
        'email'
    ], session: false });
