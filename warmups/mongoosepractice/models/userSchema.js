var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: String,
    daysSinceLastPost: Number,
    activeMember: Boolean,
    posts: [String]
});
module.exports = mongoose.model("User", userSchema);
