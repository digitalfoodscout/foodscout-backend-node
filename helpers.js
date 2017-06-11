"use strict";
const logger = require('./logger');

module.exports = function (passport, restify) {
  return {
    authenticateUser: function (req, res, next) {
      passport.authenticate('bearer', (err, user, info) => {
        if (err) {
          logger.error("Uncaught Error:", err.stack);
          return res.send(new restify.InternalServerError());
        }
        if (!user) {
          return next(new restify.errors.UnauthorizedError());
        }

        req.user = user;

        return next();
      })(req, res);
    },
    handleDBError: function (err, next) {
      if (err.name === "SequelizeValidationError") {
        next(new restify.errors.BadRequestError("Validation failed"));
      } else {
        logger.error(err);
        next(new restify.errors.InternalServerError(err));
      }
    }
  };
};
