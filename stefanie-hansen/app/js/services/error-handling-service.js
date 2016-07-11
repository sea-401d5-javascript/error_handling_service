module.exports = function(app) {
  app.factory('ErrorService', function() {
    const service = {};
    const errors = [];
    service.sendErr = function(message) {
      return function(err) {
        errors.push(message);
        console.log('error: ', err);
      };
    };

    service.getErrors = function() {
      return errors;
    };
    
    return service;
  });
};
