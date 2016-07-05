'use strict';

module.exports = function(app){
  app.factory('ErrorHandlingService', function(){
    const errors = [];
    const service = {};
    service.logError = function(message){
      return function(err){
        errors.push(message);
        console.log(err);
      };
    };
    service.getErrors = function(){
      return errors;
    };
    return service;
  });
};
