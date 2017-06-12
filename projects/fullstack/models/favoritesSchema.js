var mongoose = require("mongoose");

var favoriteSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: true
    },
    artist: String,
    images: [String],
    //thumbnail image in results
    //link to image in gallery is http://galleries.burningman.org/pages/view.php?ref= + images.gallery_ref
    url: String,
    name: {
        type: String,
        required: true
    },
    description: String,
    whyLiked: String,
    location: {
        hour: Number,
        minute: Number,
        distance: Number,
        category: String,
        lat: Number,
        lon: Number
    }
});

module.exports = mongoose.model("Favorite", favoriteSchema)