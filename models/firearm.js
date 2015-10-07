var mongoose   = require('mongoose');

var firearmsSchema = mongoose.Schema({
    make: String,
    model: String,
    caliber: String,
    action: String
});

module.exports = mongoose.model('Firearm', firearmsSchema);