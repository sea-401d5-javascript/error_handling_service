module.exports = function(app) {
  app.controller('ErrorController', function(ErrorService) {
    this.sendErr = ErrorService.sendErr();
  });
};
