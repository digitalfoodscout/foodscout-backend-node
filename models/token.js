"use strict";
module.exports = function (sequelize, DataTypes) {
  const Token = sequelize.define("Token", {
    token: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    hooks: {
      beforeValidate: function (token, options, cb) {
        if (!token.expires) {
          const date = new Date();
          date.setDate(date.getDate() + 1);
          token.expires = date;
        }
        cb(null, token);
      }
    } });
  Token.associate = function (models) {
    Token.belongsTo(models.User);
  };
  return Token;
};
