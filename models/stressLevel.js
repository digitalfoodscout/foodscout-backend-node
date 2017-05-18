"use strict";
module.exports = function(sequelize, DataTypes) {
  const StressLevel = sequelize.define("StressLevel", {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    intensity: {
      type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
          //TODO
      }
    }
  });
  return Meal;
};