"use strict";
const passport = require('passport');
const logincheck = require('./logincheck');
const config = require('./config');

module.exports = function (models) {
    const ResourceOwnerPasswordStrategy = require('passport-oauth2-resource-owner-password').Strategy;
    const BearerStrategy = require('passport-http-bearer').Strategy;

    passport.use(new ResourceOwnerPasswordStrategy(
        function (clientId, clientSecret, username, password, done) {
            if (config.clients.includes(clientId)) {
                models.User.findOne({where: {username: username}}).then(function (user) {

                    logincheck.checkLogin(username, password, user.password).then(function (isValid) {
                        if (isValid) {
                            done(null, clientId, user.get({plain: true}));
                        }
                        else {
                            done(null, clientId, null);
                        }
                    }).catch(function (err) {
                        done(err);
                    });
                })
            }
            else {
                done("Client not found");
            }

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