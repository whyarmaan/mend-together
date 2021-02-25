const Router = require("express").Router()
const AuthRouter = require("./Auth.api");

Router.use("/auth", AuthRouter);

module.exports = Router