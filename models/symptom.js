"use strict";
module.exports = function (sequelize, DataTypes) {
  const Symptom = sequelize.define("Symptom", {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Symptom;
};
