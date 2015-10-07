var mongoose   = require('mongoose');

var moviesSchema = mongoose.Schema({
    title: String,
    genre: String,
    rating: String,
    runningTime: String,
    review: String
});

module.exports = mongoose.model('Movie', moviesSchema);