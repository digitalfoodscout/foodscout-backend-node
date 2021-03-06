"use strict";
const fs = require('fs');

module.exports = function (app, passport, models, helpers) {
  fs.readdirSync(__dirname).forEach(file => {
    if (file === "index.js") return;
    const name = file.substr(0, file.indexOf('.'));
    require(`./${name}`)(app, passport, models, helpers);
  });
};
