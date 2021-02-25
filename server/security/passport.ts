import {ClientID as GoogleClientID, ClientSecret as GoogleClientSecret} from '../configs/baseConfig';

import {Strategy as GoogleOAuthStrategy} from 'passport-google-oauth20';

import passport from 'passport';

export const googleAuth = (passport: passport.PassportStatic): void => {
    passport.use('googleOauth', new GoogleOAuthStrategy({
        clientID: GoogleClientID,
        clientSecret: GoogleClientSecret,
        userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
        callbackURL: '/auth/google/callback',
        passReqToCallback: true
    }, async (req, accessToken, refreshToken, profile, done) => {
        console.log(accessToken, profile, refreshToken);
        done(null, {
            profile
        });
    }));

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });
};
