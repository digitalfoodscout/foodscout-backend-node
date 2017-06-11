"use strict";
const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true
    },
    password: {
      type: Sequelize.STRING(270),
      allowNull: false
    }
  });
  User.associate = function (models) {
    User.hasMany(models.Token);
  };
  return User;
};
