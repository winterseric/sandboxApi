var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    moviesSchema = require('../models/movie');

/* GET all movies */
router.get('/', function(req, res, next) {
    var Movie = mongoose.model('Movie', moviesSchema);
    Movie.find(function(err, movies) {
        if(err)
            return console.error(err);
        else
            res.json({
                statusCode: 200,
                movies: movies
            });
    });
});

/* GET a movie */
router.get('/:id', function(req, res, next) {
    var Movie = mongoose.model('Movie', moviesSchema);
    Movie.find({
        _id: req.params.id
    }, function(err, movies) {
        if(err)
            return console.error(err);
        else
            res.json({
                statusCode: 200,
                movies: movies
            });
    });
});

/* CREATE a movie */
router.post('/', function(req, res, next) {
    var Movie = mongoose.model('Movie', moviesSchema);
    var movie = new Movie();
    movie.title = req.body.title;
    movie.genre = req.body.genre;
    movie.rating = req.body.rating;
    movie.runningTime = req.body.runningTime;
    movie.review = req.body.review;
    movie.save(function(err) {
        if(err)
            res.send(err);
        else
            res.json({
                statusCode: 201
            });
    });
});

/* UPDATE a movie */
router.put('/:id', function(req, res, next) {
    var Movie = mongoose.model('Movie', moviesSchema);
    Movie.findById(req.params.id, function(err, movie) {
        if(err) res.send(err);
        movie.title = req.body.title;
        movie.genre = req.body.genre;
        movie.rating = req.body.rating;
        movie.runningTime = req.body.runningTime;
        movie.review = req.body.review;
        movie.save(function(err) {
            if(err)
                res.send(err);
            else
                res.json({
                    statusCode: 201
                });
        });
    });
});

/* DELETE a movie */
router.delete('/:id', function(req, res, next){
    var Movie = mongoose.model('Movie', moviesSchema);
    Movie.remove({
        _id: req.params.id
    }, function(err, movie) {
        if(err)
            return console.error(err);
        else
            res.json({
                statusCode: 204
            });
    });

});

module.exports = router;