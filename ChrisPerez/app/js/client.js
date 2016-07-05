const angular = require('angular');

var FirstApp = angular.module('FirstApp', []);
require('./first')(FirstApp);
require('./services')(FirstApp);
