"use strict";

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const logger = require('../logger');

config.logging = logger.debug;

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

module.exports = function (app, passport, models) {
  // Protected route that requries authentication via authorization header
  app.get('/suffered_from', (req, res) => {
    // usage of query parameters: req.query.query_parameter
    models.Suffered_From.findAll({})
      .then(suffered_from => res.send(suffered_from));
  });

  app.get('/suffered_from/:id', (req, res) => models.Suffered_From.findById(req.params.id)
        .then(suffered_from => res.send(suffered_from)
    )
      .catch(err => {
        res.send(`Error: ${err}`);
      }));

  app.del('/suffered_from/:id', (req, res) => {
    models.Suffered_From.destroy({
      where: {
        'id': req.params.id
      }
    }).then(result => {
      res.send(`Result: ${result}`);
    }).catch(err => {
      res.send(`Error: ${err}`);
    });
  });

  app.put('/suffered_from', (req, res) => {
    // TODO
  });

  app.post('/suffered_from', (req, res) => sequelize.transaction(t =>
      // chain all your queries here. make sure you return them.
       models.Suffered_From.create({
         date: new Date(Date.now()),
         intensity: req.body.intensity
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
