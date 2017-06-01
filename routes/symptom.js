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
  app.get('/symptom', function (req, res, next) {
    //usage of query parameters: req.query.query_parameter
    var test = models.Symptom.findAll({})
      .then(symptoms => res.send(symptoms));
  });

  app.get('/symptom/:id', function (req, res, next) {
    return models.Symptom.findById(req.params.id)
      .then(symptom => res.send(symptom))
      .catch(function (err) {
        res.send('Error: ' + err);
      });
  });

  app.del('/symptom/:id', function (req, res, next) {
    models.Symptom.destroy({
      where: {
        'id': req.params.id
      }
    }).then(function (result) {
      res.send('Result: ' + result);
    }).catch(function (err) {
      res.send('Error: ' + err);
    });
  });

  app.put('/symptom', function (req, res, next) {
    //TODO
  });

  app.post('/symptom', function (req, res, next) {
    return sequelize.transaction(function (t) {
      // chain all your queries here. make sure you return them.
      return models.Symptom.create({
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
};
