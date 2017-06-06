module.exports = function (req, res, next) {
    console.log("I'm the middleware");
    req.stuff = "Haha, you can't complete until I say so";
    next();
}
