var express = require("express");
var bountyRoute = express.Router();
var Bounty = require("../models/bountySchema");

bountyRoute.get("/", function (req, res) {

    Bounty.find(function (err, bounties) {
        if (err) return res.status(500).send(err);
        return res.send(bounties);
    })
});

bountyRoute.post("/", function (req, res) {

    var bounty = new Bounty(req.body);
    bounty.save(function (err, newBounty) {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newBounty)
    })
});

bountyRoute.get("/:id", function (req, res) {

    Bounty.findById(req.params.id, function (err, bounty) {
        if (err) return res.status(500).send(err);
        return res.send(bounty)
    });
});

bountyRoute.put("/:id", function (req, res) {

    Bounty.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedBounty) {
        if (err) return res.status(500).send(err);
        return res.send(updatedBounty)
    })
});

bountyRoute.delete("/:id", function (req, res) {

    Bounty.findByIdAndRemove(req.params.id, function (err, bounty) {
        if (err) return res.status(500).send(err);
        return res.send(bounty)
    })
});

module.exports = bountyRoute;