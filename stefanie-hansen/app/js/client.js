const angular = require('angular');

const app = angular.module('ErrorApp', []);

require('./services/error-handling-service')(app);
require('./controllers/error-controller')(app);
