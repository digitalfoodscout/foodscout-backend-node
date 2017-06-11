"use strict";

module.exports = {
  checkLogin: function (newpassword, userpassword) {
    return new Promise((resolve, reject) => {
      const password = require('password-hash-and-salt');
      password(newpassword).verifyAgainst(userpassword, (error, verified) => {
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
