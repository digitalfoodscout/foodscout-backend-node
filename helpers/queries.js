const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(module.filename);
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


module.exports = function (mModels, query, column) {
  const options = {};
  const mColumn = query.col ? query.col : column;
  if (Object.keys(query).length > 0) {
    // Limiting
    if (query.limit) {
      options.limit = parseInt(query.limit);
    }
    // Limiting and Pagination
    if (query.limit && query.offset) {
      options.offset = parseInt(query.offset);
    }
    // Ordering
    if (query.order) {
      options.order = sequelize.literal(`${mColumn} ${query.order}`);
    }
    if (query.name || query.search || query.gt || query.gte || query.lt || query.lte || query.ne || query.eq) {
      // Every query will be implicit joined with an AND
      const whereOptions = Object.assign(whereQuery(query), operatorsQuery(mModels, query, mColumn));
      if (Object.keys(whereOptions).length > 0) {
        options.where = sequelize.where(sequelize.col(`${mColumn}`), whereOptions);
      }
    }
  }
  return options;
};

function whereQuery(query) {
  if (Object.keys(query).length > 0) {
    if (query.name) {
      return { like: `${query.name}%` };
    } else if (query.search) {
      return { like: `%${query.search}%` };
    }
  }
  return {};
}

// Operators just work on Integer, Date or Doublecolumn, with others they will be ignored
function operatorsQuery(mModels, query, column) {
  const queryOptions = {};
  let parseColumn;
  if (Object.keys(query).length > 0 && mModels.attributes.hasOwnProperty(column.toString())) {
    const test = mModels.attributes[column.toString()].type.toString();
    switch (test) {
      case Sequelize.DataTypes.INTEGER.name.toString():
        parseColumn = function (a) {
          return parseInt(a);
        };
        break;
        // TODO Isn't working right
      case Sequelize.DataTypes.DATE.name.toString():
        parseColumn = function (a) {
          return new Date(a);
        };
        break;
      case Sequelize.DataTypes.DOUBLE.name.toString():
        parseColumn = function (a) {
          return parseFloat(a);
        };
        break;
      default:
        return {};
    }
    if (query.gt) {
      queryOptions.gt = parseColumn(query.gt);
    }

    if (query.gte) {
      queryOptions.gte = parseColumn(query.gte);
    }
    if (query.lt) {
      queryOptions.lt = parseColumn(query.lt);
    }
    if (query.lte) {
      queryOptions.lte = parseColumn(query.lte);
    }
    if (query.ne) {
      queryOptions.ne = parseColumn(query.ne);
    }
    return queryOptions;
  }

  return {};
}
