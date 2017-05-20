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

    app.post('/user', function (req, res, next) {
        return sequelize.transaction(function (t) {
            // chain all your queries here. make sure you return them.
            return models.User.create({
                username: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
        }).then(function (result) {
            // Transaction has been committed
            // result is whatever the result of the promise chain returned to the transaction callback
            res.send('Result: ' + result);
        }).catch(function (err) {
            // Transaction has been rolled back
            // err is whatever rejected the promise chain returned to the transaction callback
            res.send('Error: ' + err);
        });
    });
}
;