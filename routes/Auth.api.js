const Router = require("express").Router();
const Auth = require("../controllers/Auth");
const passport = require("passport")
const isAuth = require('../handlers/isAuth');

Router.get("/google", Auth.authenticate);
Router.get('/google/callback', Auth.passportCallback, Auth.authCallback)
Router.get('/logout', isAuth, Auth.logout)
Router.get("/test", isAuth, (req,res,next) => {
    res.json({
        message: 'WORKING!!!!!'
    })
})

module.exports = Router;