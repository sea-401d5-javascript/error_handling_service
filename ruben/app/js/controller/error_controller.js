module.exports = function(app) {
  app.controller('errorController', function(ErrorService) {
    this.errors = ErrorService.getErrors();
  });
};
