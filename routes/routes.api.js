const Router = require("express").Router()

Router.get("/", (req, res, next) => {
    res.json({
        message: `🚀 Api Working Start Editing ${__dirname} `
    })
})

module.exports = Router