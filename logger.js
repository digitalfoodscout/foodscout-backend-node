const winston = require('winston');
const config = require('./config');

const customLevels = {
  levels: {
    debug: 3,
    info: 2,
    warn: 1,
    error: 0
  },
  colors: {
    debug: 'blue',
    info: 'green',
    warn: 'yellow',
    error: 'red'
  }
};

const loggerOpts = {
  level: 'info',
  levels: customLevels.levels,
  transports: []
};

if(config.logger.console === true) {
  loggerOpts.transports.push(new winston.transports.Console({
    levels: customLevels.levels,
    colorize: true
  }));
}

const logger = new winston.Logger(loggerOpts);
winston.addColors(customLevels.colors);

module.exports = logger;