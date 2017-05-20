"use strict";
module.exports = function(sequelize, DataTypes) {
    const SymptomDiaryEntry = sequelize.define("SymptomDiaryEntry", {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true
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
    return SymptomDiaryEntry;
};