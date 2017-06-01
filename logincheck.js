"use strict";

module.exports = {
  checkLogin: function (newpassword, userpassword) {
    return new Promise(function (resolve, reject) {
      let password = require('password-hash-and-salt');
      password(newpassword).verifyAgainst(userpassword, function (error, verified) {
        if (error)
          return resolve(false);
        if (!verified) {
          return resolve(false);
        } else {
          return resolve(true);
        }
      });
    });
  }
};
