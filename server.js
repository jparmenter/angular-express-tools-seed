'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('./lib/config/config');
require('./lib/config/express')();