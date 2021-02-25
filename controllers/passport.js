const GoogleClientID = require("../configurations").ClientID;
const GoogleClientSecret = require("../configurations").ClientSecret;
const GoogleOAuthStratergy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use('googleOauth', new GoogleOAuthStratergy({
    clientID: GoogleClientID,
    clientSecret: GoogleClientSecret,
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
}, async (req, accessToken, refreshToken, profile, done) => {
    console.log(accessToken, profile, refreshToken);
    done(null, {
        profile
    })
}))

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})