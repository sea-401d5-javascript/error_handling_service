module.exports = function(app) {
  app.factory('ErrorService', function() {
    return function(message) {
      console.log(message);
      console.log(err);
    };
  });
};
