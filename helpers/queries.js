
module.exports = function (query, column) {
  const sequelize = require("sequelize");
  const options = {};
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
    if (query.order && query.col) {
      options.order = sequelize.literal(`${query.col} ${query.order}`);
    } else if (query.order) {
      options.order = sequelize.literal(`${column} ${query.order}`);
    }
    // Prefixsearch
    if (query.name) {
      options.where = {
        name: {
          $like: `${query.name}%`
        }
      };
    }
    return options;
  }
};
