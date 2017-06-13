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

module.exports = (app, passport, models) => {
  // Protected route that requries authentication via authorization header
  app.get('/user', (req, res) => {
    // usage of query parameters: req.query.query_parameter
    models.User.findAll({})
      .then(users => res.send(users));
  });

  app.get('/user/:id', (req, res) => models.User.findById(req.params.id)
        .then(user => res.send(user)
    )
      .catch(err => {
        res.send(`Error: ${err}`);
      }));

  //TODO: Return Status-Code 200 "OK" and Authentication
  app.del('/user/:id', (req, res) => {
    models.User.destroy({
      where: {
        'id': req.params.id
      }
    }).then(result => {
      res.send(`Result: ${result}`);
    }).catch(err => {
      res.send(`Error: ${err}`);
    });
  });

  app.put('/user', (req, res) => {
    // TODO
  });

  app.post('/user', (req, res) => {
    // Use package password-hash-and-salt
    const password = require('password-hash-and-salt');
    // Creating hash and salt
    password(req.body.password).hash((error, hash) => {
      if (error)
        throw new Error('Something went wrong at Hashing!');
      return sequelize.transaction(t =>
        // chain all your queries here. make sure you return them.
         models.User.create({
           username: req.body.name,
           email: req.body.email,
          // Store hash (incl. algorithm, iterations, and salt)
           password: hash
         })).then(result => {
        // Transaction has been committed
        // result is whatever the result of the promise chain returned to the transaction callback
           res.send(201);
         }).catch(err => {
        // Transaction has been rolled back
        // err is whatever rejected the promise chain returned to the transaction callback
           res.send(`Error: ${err}`);
         });
    });
  });
}
;
