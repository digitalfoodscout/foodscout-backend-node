"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const logger = require('../logger');

config.logging = logger.debug;

const db = {};

let sequelize;

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

module.exports = function (app, passport, models, helpers) {
    // Protected route that requries authentication via authorization header
    app.get('/user', function (req, res, next) {
        //usage of query parameters: req.query.query_parameter
        var test = models.User.findAll({})
            .then(users => res.send(users));
    });

    app.get('/user/:id', function (req, res, next) {
        return models.User.findById(req.params.id)
                .then(stresslevel => res.send(stresslevel))
                .catch(function (err) {
                    res.send('Error: ' + err);
                });
    });

    app.del('/user/:id', function (req, res, next) {
        models.User.destroy({
            where: {
                'id' : req.params.id
            }
        }).then(function (result) {
            res.send('Result: ' + result);
        }).catch(function (err) {
            res.send('Error: ' + err);
        });
    });

    app.put('/user', function (req, res, next) {
        //TODO
    });

    app.post('/user', function (req, res, next) {

        // Use package password-hash-and-salt
        var password = require('password-hash-and-salt');
        // Creating hash and salt
        password(req.body.password).hash(function(error, hash) {
            if (error)
                throw new Error('Something went wrong at Hashing!');
            return sequelize.transaction(function (t) {
                // chain all your queries here. make sure you return them.
                return models.User.create({
                    username: req.body.name,
                    email: req.body.email,
                    // Store hash (incl. algorithm, iterations, and salt)
                    password: hash
                });
            }).then(function (result) {
                // Transaction has been committed
                // result is whatever the result of the promise chain returned to the transaction callback
                res.send(201);
            }).catch(function (err) {
                // Transaction has been rolled back
                // err is whatever rejected the promise chain returned to the transaction callback
                res.send('Error: ' + err);
            });
        });


    });
}
;