const angular = require('angular');
const app = angular.module('ErrorApp', []);

require('./services')(app);
require('./controllers')(app);
