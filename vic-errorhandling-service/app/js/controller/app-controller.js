'use strict';

module.exports = function(app) {
  app.controller('AppController', function(ErrorService) {
    this.error = ErrorService.getErrors();
  });
};
