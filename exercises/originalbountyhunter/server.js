var express = require("express");
var mongoose = require("mongoose");
var morgan = require("morgan");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.connect("mongodb://localhost/bounty");

app.use("/bounties", require("./routes/bountyRoute"));

app.listen(port, function () {
    console.log("The server is listening on port " + port)
});