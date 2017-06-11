"use strict";

const logger = require('./logger');

module.exports = {
  startServer: function (cb) {
    const restify = require('restify');
    const models = require('./models');

    restify.CORS.ALLOW_HEADERS.push('authorization');

    const app = restify.createServer({});

    app.pre((req, res, next) => {
      res.setHeader('Content-Type', 'application/json');
      res.charSet('utf-8');
      next();
    });

    app.use(restify.CORS({
      origins: ['*'],
      credentials: true
    }));

    app.use(restify.queryParser());

    app.use(restify.bodyParser({
      mapParams: true,
      mapFiles: false,
      overrideParams: false
    }));

    app.use(restify.conditionalRequest());

    const passport = require('./passport')(models);
    const helpers = require('./helpers')(passport, restify);
    require('./routes')(app, passport, models, helpers);

    app.on('InternalServer', (req, res, err, cb) => {
      logger.error("Internal Error:", err);
      return cb();
    });

    app.on('uncaughtException', (req, res, route, err) => {
      logger.error("Uncaught Error:", err.stack);
      res.send(new restify.errors.InternalError());
    });

    models.sequelize.sync().then(() => {
      const port = process.env.PORT || 8080;
      app.listen(port, () => {
        logger.info('%s listening at %s', app.name, app.url);
        if (cb) {
          cb(models);
        }
      });
    }).catch(err => {
      logger.error('Unable to connect to the database:', err);
      process.exit(7);
    });
   /* app.listen(() => {
      require('./document')(app.router.mounts);
    });*/
  }
};
