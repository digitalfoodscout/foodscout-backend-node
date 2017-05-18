"use strict";
module.exports = function(sequelize, DataTypes) {
  const FoodDiaryEntry = sequelize.define("Meal", {
    id: {
          type: DataTypes.INTEGER,
          unique: true,
          allowNull: false
      },
    date: {
        type: DataTypes.DATETIME,
        allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
          //TODO
      }
    }
  });
  return FoodDiaryEntry;
};