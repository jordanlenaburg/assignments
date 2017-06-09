var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var app = express();

var port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.connect("mongodb://localhost/computers")

var computerSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    type: String,
    accessories: [String],
    condition: String,
    price: Number
});

app.listen(port, function () {
    console.log("The server is listening on port " + port)
})

mongoose.model("Computer", computerSchema)

var computer = new Computer({
    brand: "Mac",
    type: "laptop",
    accessories: ["dongle", "charger"],
    condition: "great",
    price: 800
});

computer.save();