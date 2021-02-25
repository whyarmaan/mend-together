import {Request, Response} from 'express';

export const authCallback = (req: Request, res: Response): Response => {
    return res.json({
        user: req.user
    });
};

export const logout = (req: Request, res: Response): void => {
    req.session = null;
    req.logout();
    res.redirect('/');
};
