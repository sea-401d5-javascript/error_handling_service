module.exports = function(app) {
  app.factory('ErrorService', function() {
    const service = {};
    service.sendErr = function(message) {
      return {message, err};
      console.log('Message: ' + message + ' Error: ' + err);
    };
    return service;
  });
};
