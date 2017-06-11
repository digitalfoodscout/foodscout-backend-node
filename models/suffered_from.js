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
      references: 'Symptoms',
      referencesKey: 'id'
    },
    userId: {
      type: DataTypes.INTEGER,
      references: 'Users',
      referencesKey: 'id'
    }
  }, {
    classMethods: {
      associate: function (models) {
        // TODO
      }
    }
  });
  return Suffered_From;
};
