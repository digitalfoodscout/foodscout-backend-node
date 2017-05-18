"use strict";

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        id:{
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        }
        username: {
            type: DataTypes.VARCHAR,
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.VARCHAR,
            unique: true,
            allowNull: true
        },
        password: {
            type: DataTypes.CHAR,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                //TODO Errorfix
                User.hasMany(models.Token);
            }
        }
    });
    return User;
};