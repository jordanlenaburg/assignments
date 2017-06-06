var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.listen(8000, function () {
    console.log("The server is listening on port 8000")
})

app.get("/", require("./middleware"))

app.get("/", function (req, res) {

    console.log(req.stuff);
    console.log("I'm the GET function");

})