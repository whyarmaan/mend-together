module.exports = (req, res, next) => {
    console.log("AM IN")
    return req.user ? next() : res.status(401).json({
        message: 'UnAuthorized!'
    });
}