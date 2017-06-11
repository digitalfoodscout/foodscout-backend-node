"use strict";
module.exports = function (sequelize, DataTypes) {
  const Meal = sequelize.define("Meal", {
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
    },
    public: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
  return Meal;
};
