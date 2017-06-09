var mongoose = require("mongoose");
var postSchema = new mongoose.Schema({
    user: String,
    content: String,
    comments: [{
        user: String,
        comment: String
    }],
    tags: [String]
});
module.exports = mongoose.model("post", postSchema);