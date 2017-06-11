"use strict";
const passport = require('passport');
const logincheck = require('./logincheck');
const config = require('./config');

module.exports = function (models) {
  const LocalStrategy = require('passport-local').Strategy;
  const BearerStrategy = require('passport-http-bearer').Strategy;

  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false
  },
    (username, password, done) => {
      models.User.findOne({ where: { username: username } }).then(user => {
        if (!user) {
          return (done(null, null));
        }
        logincheck.checkLogin(password, user.password).then(isValid => {
          if (isValid) {
            done(null, user.get({ plain: true }));
          } else {
            done(null, null);
          }
        }).catch(err => {
          done(err);
        });
      });
    }
  ));

  passport.use(new BearerStrategy((token, done) => {
    models.Token.findOne({
      where: { token: token, expires: { $gte: new Date() } },
      include: [models.User]
    }).then(token => {
      if (!token) {
        return done(null, false);
      }

      return done(null, token.User);
    }).catch(error => done(error));
  }));

  return passport;
};
