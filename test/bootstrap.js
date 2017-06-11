"use strict";
const server = require('../server');

before(done => {
  server.startServer(models => {
    global.url = `http://localhost:${process.env.PORT || 8080}`;
    global.models = models;
    done();
  });
});