var mongoose = require("mongoose");
var bountySchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    type: String,
    price: Number,
    living: Boolean
});

module.exports = mongoose.model("Bounty", bountySchema);