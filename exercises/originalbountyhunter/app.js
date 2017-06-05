var express = require("express");

var app = express();

var uuidV4 = require("uuid/v4");

var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.listen(8000, function () {
    console.log("The server is listening on port 8000")
});

var bounties = [
    {
        firstName: "Darth",
        lastName: "Maul",
        living: false,
        bountyAmount: 0,
        type: "Sith",
        _id: uuidV4,
    },
    {
        firstName: "Obi Wan",
        lastName: "Kenobi",
        living: false,
        bountyAmount: 0,
        type: "Jedi",
        _id: uuidV4,
    }
];




app.get("/bounties", function (req, res) {

    res.send(bounties);

});

app.post("/bounties", function (req, res) {

    var newBounty = req.body;
    console.log(newBounty);
    newBounty._id = uuidV4;
    bounties.push(newBounty)
    res.send(bounties);

});

app.put("/bounties", function (req, res) {


});

app.delete("/bounties", function (req, res) {


})
