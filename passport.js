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
        function (username, password, done) {
            models.User.findOne({where: {username: username}}).then(function (user) {
                if(!user){
                    return(done(null,null));
                }
                logincheck.checkLogin(password, user.password).then(function (isValid) {
                    if (isValid) {
                        done(null, user.get({plain: true}));
                    }
                    else {
                        done(null, null);
                    }
                }).catch(function (err) {
                    done(err);
                });
            })
        }
    ));

    passport.use(new BearerStrategy(function (token, done) {
        models.Token.findOne({
            where: {token: token, expires: {$gte: new Date()}},
            include: [models.User]
        }).then(function (token) {
            if (!token) {
                return done(null, false);
            }

            return done(null, token.User);
        }).catch(function (error) {
            return done(error);
        })
    }));

    return passport;
};