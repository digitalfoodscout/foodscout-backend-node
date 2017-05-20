"use strict";
module.exports = function(sequelize, DataTypes) {
    const FoodDiaryEntry = sequelize.define("FoodDiaryEntry", {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true
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
    return FoodDiaryEntry;
};