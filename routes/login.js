"use strict";
const restify = require('restify');
const logger = require('../logger');

module.exports = function (app, passport, models) {
  app.post('/authorize', function (req, res, next) {
    passport.authenticate('local', function (err, user) {
      if (err) {
        if (err === "User not found") {
          res.setHeader("WWW-Authenticate", 'xBasic realm="fake"');
          return next(new restify.errors.InvalidCredentialsError());
        }
        else {
          logger.error(err.stack);
          return next(new restify.errors.InternalServerError());
        }
      }

      if (!user) {
        res.setHeader("WWW-Authenticate", 'xBasic realm="fake"');
        return next(new restify.errors.InvalidCredentialsError());
      }

      require('crypto').randomBytes(180, function (ex, buf) {
        if (ex) {
          return next(new restify.errors.InternalServerError());
        }


        const token = buf.toString('base64').replace(/\//g, '0');

        const expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);

        models.Token.create({token: token, UserId: user.id, expires: expireDate}).then(function () {

          const result = {
            access_token: token,
            expires_in: 60 * 60,  // 1 hour
            token_type: "Bearer"
          };

          res.send(200, result);
          return next();
        }).catch(function (err) {
          logger.error(err);
          return next(new restify.errors.InternalServerError());
        });
      });
    })(req, res);
  });
};
