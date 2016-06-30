module.exports = function(app) {
  app.controller('ErrController', function(ErrService) {
    this.printErr = ErrService.getError();
  });
};
