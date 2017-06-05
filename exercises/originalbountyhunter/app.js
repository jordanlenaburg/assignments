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
        living: true,
        bountyAmount: 0,
        type: "Sith",
        _id: uuidV4(),
    },
    {
        firstName: "Obi Wan",
        lastName: "Kenobi",
        living: true,
        bountyAmount: 0,
        type: "Jedi",
        _id: uuidV4(),
    },
    {
        firstName: "Anakin",
        lastName: "Skywalker",
        living: true,
        bountyAmount: 0,
        type: "Sith",
        _id: uuidV4(),
    },
    {
        firstName: "Quai Gon",
        lastName: "Jin",
        living: false,
        bountyAmount: 0,
        type: "Jedi",
        _id: uuidV4(),
    }
];


app.get("/bounties", function (req, res) {

    if (req.query.isLiving) {
        var filteredBounties = bounties.filter(function (obj) {
            return obj.living === true;
        })
        return res.send(filteredBounties)
    }
    return res.send(bounties);

});

app.post("/bounties", function (req, res) {

    var newBounty = req.body;
    console.log(newBounty);
    newBounty._id = uuidV4;
    bounties.push(newBounty)
    res.send(bounties);

});

app.get("/bounties/:id", function (req, res) {

    bounties.forEach(function (obj) {
        console.log(obj);
        if (req.params.id === obj._id) {
            return res.send(obj);
        }
    })
    return res.send("No bounty with ID found");
});

app.put("/bounties/:id", function (req, res) {

    for (var i = 0; i < bounties.length; i++) {
        if (req.params.id === bounties[i]._id) {
            console.log(req.body)
            console.log(bounties[i])
            bounties[i] = req.body
            return res.send(bounties)
        }
    }
    return res.send("No bounty with ID found");
});

app.delete("/bounties/:id", function (req, res) {

    for (var i = 0; i < bounties.length; i++) {
        if (req.params.id === bounties[i]._id) {
            bounties.splice(i, 1)
            return res.send(bounties)
        }
    }
    return res.send("No bounty with ID found");
});
