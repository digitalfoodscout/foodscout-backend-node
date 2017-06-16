"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
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
  const queryBuilder = require('../helpers/queries');
  // Protected route that requries authentication via authorization header
  app.get('/food', (req, res, next) => {
    models.Food.findAll(queryBuilder(req.query, 'st')).then(foods => res.send(foods)).catch(err => {
      res.send(`Error: ${err}`);
    });
  });
};


