"use strict";
module.exports = function(sequelize, DataTypes) {
    const FoodDiaryEntry = sequelize.define("FoodDiaryEntry", {
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
        mealId: {
                type: DataTypes.INTEGER,
                references: 'Meals',
                referencesKey: 'id'
        },
        userId:{
            type: DataTypes.INTEGER,
            references: 'Users',
            referencesKey: 'id'
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