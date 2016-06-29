'use strict';

module.exports = function(app) {
  app.factory('ErrorService', function() {
    const errors = [];

    return function(message) {
      return function(err) {
        errors.push(message);
        console.log(err);

      };
    };
  });
};
