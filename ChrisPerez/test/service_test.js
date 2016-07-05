'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

describe('Error handling service tests', ()=>{
  let errorService;
  beforeEach(()=>{
    angular.mock.module('FirstApp');
    angular.mock.inject(function(ErrorHandlingService){
      errorService = ErrorHandlingService;
    });

  });
  it('should test the error service or whatever', ()=>{
    expect(typeof errorService.getErrors).toBe('function');
    expect(typeof errorService.logError).toBe('function');
    expect(Array.isArray(errorService.getErrors())).toBe(true);
  });
  it('should test stuff after functions are called', ()=>{
    errorService.logError('test error')({});
    let errorArray = errorService.getErrors();
    expect(errorArray[0]).toBe('test error');
  });
});
