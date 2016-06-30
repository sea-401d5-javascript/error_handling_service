const angular = require('angular');

const app = angular.module('ErrApp', []);

require('./services/error_service')(app);
require('./controllers/error_controller')(app);
