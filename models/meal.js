"use strict";
module.exports = function(sequelize, DataTypes) {
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
        userId:{
            type: DataTypes.INTEGER,
            references: 'Users',
            referencesKey: 'id',
            allowNull: true
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