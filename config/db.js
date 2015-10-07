module.exports = {
    setup: function() {
        var express = require('express'),
            mongoose = require('mongoose'),
            Promise = require('bluebird');

        return new Promise(function(resolve, reject) {
            mongoose.connect('mongodb://localhost:27017/sandbox');

            resolve();
        });
    }
};