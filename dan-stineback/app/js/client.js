const angular = require('angular');

var FirstApp = angular.module('FirstApp', []);
require('./services')(FirstApp);
require('./controller')(FirstApp);
