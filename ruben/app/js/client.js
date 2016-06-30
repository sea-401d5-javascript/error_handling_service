'use strict';

const angular = require('angular');

const app = angular.module('ErrorApp', []);
require('./controller')(app);
require('./services')(app);
