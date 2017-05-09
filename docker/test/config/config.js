"use strict";

const config = {
  username: "foodscout",
  password: "foodscout",
  database: "foodscout",
  host: "db",
  define: {
    "timestamps": false
  },

  migrationStorage: "sequelize"
};

module.exports =
{
  development: config,
  test: config,
  production: config
};