"use strict";
module.exports = function(sequelize, DataTypes) {
  const Meal = sequelize.define("Meal", {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    name: {
        type: DataTypes.VARCHAR,
        allowNull: false
    },
    public: {
      type: DataTypes.BOOLEAN,
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