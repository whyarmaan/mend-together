const { use } = require("passport");
const passport = require("passport");
const passportConf = require("./passport");

passport.serializeUser((user, done) => {
    done(null, user);
})

exports.authenticate = passport.authenticate('googleOauth', { scope: [
    'profile',
    'email'
], session: false })

exports.authCallback = (req, res, next) => {
    return res.json({
        user: req.user
    })
}

exports.passportCallback = passport.authenticate('googleOauth', { failureRedirect: '/auth/google', failureFlash: true })

exports.logout = (req, res, next) => {
    req.session = null;
    req.logout();
    res.redirect("/");
}
