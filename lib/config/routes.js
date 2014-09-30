'use strict';

var index = require('../controllers');

module.exports = function(app) {
  app.get('/partials/*', index.partials);
  app.get('/*', index.index);
};
