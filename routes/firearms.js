var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    firearmsSchema = require('../models/firearm');

/* GET all firearms */
router.get('/', function(req, res, next) {
    var Firearm = mongoose.model('Firearm', firearmsSchema);
    Firearm.find(function(err, firearms) {
        if(err)
            return console.error(err);
        else
            res.json({
                statusCode: 200,
                firearms: firearms
            });
    });
});

/* GET a firearm */
router.get('/:id', function(req, res, next) {
    var Firearm = mongoose.model('Firearm', firearmsSchema);
    Firearm.find({
            _id: req.params.id
    }, function(err, firearms) {
        if(err)
            return console.error(err);
        else
            res.json({
                statusCode: 200,
                firearms: firearms
            });
    });
});

/* CREATE a firearm */
router.post('/', function(req, res, next) {
    var Firearm = mongoose.model('Firearm', firearmsSchema);
    var firearm = new Firearm();
    firearm.make = req.body.make;
    firearm.model = req.body.model;
    firearm.caliber = req.body.caliber;
    firearm.action = req.body.action;
    firearm.save(function(err) {
        if(err)
            res.send(err);
        else
            res.json({
                statusCode: 201
            });
    });
});

/* UPDATE a firearm */
router.put('/:id', function(req, res, next) {
    var Firearm = mongoose.model('Firearm', firearmsSchema);
    Firearm.findById(req.params.id, req.body, function(err, firearm) {
        if(err)
            res.send(err);
        else
            firearm.make = req.body.make;
            firearm.model = req.body.model;
            firearm.caliber = req.body.caliber;
            firearm.action = req.body.action;
            firearm.save(function(err) {
                if(err)
                    res.send(err);
                else
                    res.json({
                        statusCode: 201
                    });
            });
    });
});

/* DELETE a firearm */
router.delete('/:id', function(req, res, next){
    var Firearm = mongoose.model('Firearm', firearmsSchema);
    Firearm.remove({
        _id: req.params.id
    }, function(err, firearm) {
        if(err)
            return console.error(err);
        else
            res.json({
                statusCode: 204
            });
    });

});

module.exports = router;