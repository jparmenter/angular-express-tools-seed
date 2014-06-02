'use strict';

var _ = require('lodash');

module.exports = _.merge(
    require('./env/env.js'),
    require('./env/' + process.env.NODE_ENV + '.js') || {});