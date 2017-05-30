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
    app.get('/fooddiaryentry', function (req, res, next) {
        return models.FoodDiaryEntry.findAll({})
                .then(fooddiaryentries => res.send(fooddiaryentries))
                .catch(function (err) {
                    res.send('Error ${err}');
        });
    });

    app.get('/fooddiaryentry/:id', function (req, res, next) {
        return models.FoodDiaryEntry.findById(req.params.id)
            .then(fooddiaryentry => res.send(fooddiaryentry))
            .catch(function (err) {
                res.send('Error: ' + err);
             });
    });

    app.del('/fooddiaryentry/:id', function (req, res, next) {
        models.FoodDiaryEntry.destroy({
            where: {
                'id' : req.params.id
            }
        }).then(function (result) {
            res.send('Result: ' + result);
        }).catch(function (err) {
            res.send('Error: ' + err);
        });
    });

    app.put('/fooddiaryentry', function (req, res, next) {
        //TODO
    });

    app.post('/fooddiaryentry', function (req, res, next) {
        return sequelize.transaction(function (t) {
            // chain all your queries here. make sure you return them.
            return models.FoodDiaryEntry.create({
                date: new Date(Date.now())
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