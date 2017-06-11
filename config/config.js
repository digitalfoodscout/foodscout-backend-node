"use strict";
const config = {
  username: "foodscout",
  password: "foodscout",
  database: "foodscout",
  host: "localhost",
  define: {
    "timestamps": false
  },
  dialect: 'mysql',

  migrationStorage: "sequelize"
};

module.exports =
{
  development: config,
  test: config,
  production: config
};

