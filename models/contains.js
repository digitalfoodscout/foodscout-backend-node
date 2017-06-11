"use strict";
module.exports = function (sequelize, DataTypes) {
  const Contains = sequelize.define("Contains", {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dish_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Meals",
        key: "id"
      },
      allowNull: false
    },
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Contains;
};
