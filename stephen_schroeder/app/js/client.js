const angular = require('angular');

const ErrApp = angular.module('ErrApp', []);

require('./services')(ErrApp);
require('./controllers')(ErrApp);
