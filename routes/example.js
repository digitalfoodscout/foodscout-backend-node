"use strict";

module.exports = function (app, passport, models, helpers) {
  // Protected route that requries authentication via authorization header
  app.get('/example', [helpers.authenticateUser, function (req, res, next) {
    res.send(`UserID: ${req.user.id}`);
  }]);
};
