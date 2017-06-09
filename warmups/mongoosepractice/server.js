var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var app = express();
var port = process.env.PORT || 8000;
app.use(morgan("dev"));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/reddit");

app.use("/users", require("./routes/userRoute"));

app.listen(port, function () {
    console.log("The server is listening on port " + port)
});
