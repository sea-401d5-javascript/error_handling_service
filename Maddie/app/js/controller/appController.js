module.exports = function(app){
  app.controller('appController', function(ErrorHandler){
    this.error = ErrorHandler.getErrors();
  });
};
