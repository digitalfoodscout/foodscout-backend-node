"use strict";
module.exports = function(sequelize, DataTypes) {
    const Symptom = sequelize.define("Symptom", {
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
        }
    }, {
        classMethods: {
            associate: function(models) {
                //TODO
            }
        }
    });
    return Symptom;
};
