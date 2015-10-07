var mongoose   = require('mongoose');

var airgunsSchema = mongoose.Schema({
    make: String,
    model: String,
    caliber: String,
    action: String
});

module.exports = mongoose.model('Airgun', airgunsSchema);