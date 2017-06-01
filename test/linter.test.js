"use strict";

const lint = require('mocha-eslint');

const paths= [
  '!migrations',
  '!node_modules',
  '.'
]

lint(paths, {});
