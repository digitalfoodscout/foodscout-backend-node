"use strict";

module.exports = {
  checkLogin: function (username, password, userpassword) {
    return new Promise(function (resolve, reject) {
        // Verifying a hash
        resolve(true);
        /*var passwordhasher = require('password-hash-and-salt');
        passwordhasher(password).verifyAgainst(userpassword, function(error, verified) {
            if (error)
                return resolve(false);
            if (!verified) {
                return resolve(false);
            } else {
                return resolve(true);
            }
        });*/

      // TODO: Check username and password and call resolve(true) on successfull login or resolve(false)
    });
  }
};