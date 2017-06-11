"use strict";
module.exports = function (sequelize, DataTypes) {
  const Suffered_From = sequelize.define("Suffered_From", {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    intensity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    symptomId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Symptoms",
        key: "id"
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      references:{
        model: "Users",
        key: "id"
      },
    }
  });
  return Suffered_From;
};
