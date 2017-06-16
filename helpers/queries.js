module.exports = function (query, column) {
  const sequelize = require("sequelize");
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
      // Every query will implicit joined with an AND
      options.where = sequelize.where(sequelize.col(`${mColumn}`), Object.assign(whereQuery(query), operatorsQuery(query)));
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

function operatorsQuery(query) {
  const queryOptions = {};
  if (Object.keys(query).length > 0) {
    if (query.gt) {
      queryOptions.gt = parseInt(query.gt);
    }
    if (query.gte) {
      queryOptions.gte = parseInt(query.gte);
    }
    if (query.lt) {
      queryOptions.lt = parseInt(query.lt);
    }
    if (query.lte) {
      queryOptions.lte = parseInt(query.lte);
    }
    if (query.ne) {
      queryOptions.ne = parseInt(query.ne);
    }
    // TODO Fix
    //if (query.eq) {
    //  queryOptions.eq = parseInt(query.eq);
    //}
  }
  return queryOptions;
}
