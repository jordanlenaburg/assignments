var express = require("express");
var userRoutes = express.Router();
var User = require("../models/userSchema");

userRoutes.get("/", function (req, res) {
    User.find(function (err, users) {
        if (err) return res.status(500).send(err);
        return res.send(users);
    })
});
userRoutes.post("/", function (req, res) {
    var user = new User(req.body);
    user.save(function (err, newUser) {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newUser)
    })
});
userRoutes.get("/:id", function (req, res) {
    User.findOne({
        _id: req.params.id
    });
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send(err);
        return res.send(user);
    });
});
userRoutes.put("/:id", function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, function (err, updatedUser) {
        if (err) return res.status(500).send(err);
        return res.send(updatedUser);
    })
});
userRoutes.delete("/:id", function (req, res) {
    //find the user
    //call .remove() the user
    //OR
    //.findByIdAndRemove()
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send(err);
        return res.send(user);
    })
});

module.exports = userRoutes;
