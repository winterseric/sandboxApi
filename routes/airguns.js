var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    airgunsSchema = require('../models/airgun');

/* GET all airguns */
router.get('/', function(req, res, next) {
    var Airgun = mongoose.model('Airgun', airgunsSchema);
    Airgun.find(function(err, airguns) {
        if(err)
            return console.error(err);
        else
            res.json({
                statusCode: 200,
                airguns: airguns
            });
    });
});

/* GET an airgun */
router.get('/:id', function(req, res, next) {
    var Airgun = mongoose.model('Airgun', airgunsSchema);
    Airgun.find({
        _id: req.params.id
    }, function(err, airguns) {
        if(err)
            return console.error(err);
        else
            res.json({
                statusCode: 200,
                airguns: airguns
            });
    });
});

/* CREATE an airgun */
router.post('/', function(req, res, next) {
    var Airgun = mongoose.model('Airgun', airgunsSchema);
    var airgun = new Airgun();
    airgun.make = req.body.make;
    airgun.model = req.body.model;
    airgun.caliber = req.body.caliber;
    airgun.action = req.body.action;
    airgun.save(function(err) {
        if(err)
            res.send(err);
        else
            res.json({
                statusCode: 201
            });
    });
});

/* UPDATE an airgun */
router.put('/:id', function(req, res, next) {
    var Airgun = mongoose.model('Airgun', airgunsSchema);
    Airgun.findById(req.params.id, function(err, airgun) {
        if(err) res.send(err);
        airgun.make = req.body.make;
        airgun.model = req.body.model;
        airgun.caliber = req.body.caliber;
        airgun.action = req.body.action;
        airgun.save(function(err) {
            if(err)
                res.send(err);
            else
                res.json({
                    statusCode: 201
                });
        });
    });
});

/* DELETE an airgun */
router.delete('/:id', function(req, res, next){
    var Airgun = mongoose.model('Airgun', airgunsSchema);
    Airgun.remove({
        _id: req.params.id
    }, function(err, airgun) {
        if(err)
            return console.error(err);
        else
            res.json({
                statusCode: 204
            });
    });

});

module.exports = router;