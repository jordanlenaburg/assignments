var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json);

app.get("/", require("middleware"))

app.get("/", function (req, res) {

    console.log("I'm the GET function")

})