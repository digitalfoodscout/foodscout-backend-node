"use strict";
const server = require('../server');

before(function (done) {
  server.startServer(function (models) {
    global.url = "http://localhost:" + (process.env.PORT || 8080);
    global.models = models;
    done();
  });
});