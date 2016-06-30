module.exports = function(app) {
  app.factory('ErrService', function() {
    const service = {};
    const error = [];

    service.printErr = function(msg) {
      return function(err) {
        error.push(msg);
        console.log(err);
      };
    };
    service.getError = function() {
      return error;
    };
    return service;
  });
};
