var assert = require("assert"),
    api = require("../bin/www"),
    rest = require('restler-q');

describe('firearms', function() {

    describe('get', function() {
        it('Should return a list of firearms.', function() {
            rest.get('http://localhost:3500/v1/Firearms')
                .then(function(result) {
                    assert.equal(true, result.firearms.isArray, 'Object returned not an array.');
                });
        });
    });

    describe('getById', function() {
        it('Should return a single firearm.', function() {
            rest.get('http://localhost:3500/v1/Firearms/55fc5751a7c84c1247b9fd1')
                .then(function(result) {
                    assert.equal(true, result.firearms.isArray, 'Object returned not an array.');
                    assert.equal(1, result.firearms.length, 'Object returned an empty result set.');
                });
        });
    });

    describe('post',function() {
        it('Should create a firearm.', function() {

        });
    });

    describe('put', function() {
        it('Should update a firearm.', function() {

        });
    });

    describe('delete', function() {
        it('Should delete a firearm.', function() {

        });
    });

});