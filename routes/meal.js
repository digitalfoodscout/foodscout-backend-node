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
  // Protected route that requries authentication via authorization header
  app.get('/meal', (req, res, next) => {
    if (Object.keys(req.query).length > 0) {
      if (req.query.limit && req.query.offset && req.query.ordercol && req.query.order) {
        models.Meal.findAll({
          order: sequelize.literal(`${req.query.ordercol} ${req.query.order}`),
          offset: parseInt(req.query.offset),
          limit: parseInt(req.query.limit)
        }).then(meals => res.send(meals)).catch(err => {
          res.send(`Error: ${err}`);
        });
      } else if (req.query.limit && req.query.offset && req.query.order) {
        models.Meal.findAll({
          order: sequelize.literal(`name ${req.query.order}`),
          offset: parseInt(req.query.offset),
          limit: parseInt(req.query.limit)
        }).then(meals => res.send(meals)).catch(err => {
          res.send(`Error: ${err}`);
        });
      } else if (req.query.limit && req.query.offset) {
        models.Meal.findAll({
          offset: parseInt(req.query.offset),
          limit: parseInt(req.query.limit)
        }).then(meals => res.send(meals)).catch(err => {
          res.send(`Error: ${err}`);
        });
      } else if (req.query.ordercol && req.query.order) {
        models.Meal.findAll({
          order: sequelize.literal(`${req.query.ordercol} ${req.query.order}`)
        }).then(meals => res.send(meals)).catch(err => {
          res.send(`Error: ${err}`);
        });
      }
    } else {
      // usage of query parameters: req.query.query_parameter
      models.Meal.findAll({}).then(meals => res.send(meals));
    }
  })
  ;


  app.get('/meal/:id', (req, res, next) =>
    // usage of query parameters: req.query.query_parameter
     models.Meal.findById(req.params.id)
      .then(meal => res.send(meal))
      .catch(err => {
        res.send(`Error: ${err}`);
      }));

  app.del('/meal/:id', (req, res, next) => {
    models.Meal.destroy({
      where: {
        'id': req.params.id
      }
    }).then(result => {
      res.send(`Result: ${result}`);
    }).catch(err => {
      res.send(`Error: ${err}`);
    });
  });

  app.put('/meal', (req, res, next) => {
    // TODO
  });

  //TODO: Insert correct UserId
  app.post('/meal', (req, res, next) => sequelize.transaction(t =>
      // chain all your queries here. make sure you return them.
       models.Meal.create({
         name: req.body.name,
         public: true,
         user_id: 1,
         date: new Date(Date.now())
       })).then(result => {
      // Transaction has been committed
      // result is whatever the result of the promise chain returned to the transaction callback
         res.send(`Result: ${result}`);
       }).catch(err => {
      // Transaction has been rolled back
      // err is whatever rejected the promise chain returned to the transaction callback
         res.send(`Error: ${err}`);
       }));
};
