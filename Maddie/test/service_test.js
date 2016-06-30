'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client.js');

describe('service unit test', () => {
  let errorHandler;
  beforeEach(() => {
    angular.mock.module('ErrorApp');
    angular.mock.inject(function(ErrorHandler){
      errorHandler = ErrorHandler;
    });
  });
  it('should be a function', () => {
    expect(typeof errorHandler.getErrors).toBe('function');
  });
  it('should get an array', () => {
    expect(Array.isArray(errorHandler.getErrors())).toBe(true);
  });
  it('should add an error to the log', () => {
    errorHandler.logError('test')({});
    let errorArray = errorHandler.getErrors();
    expect(errorArray[0]).toBe('test');
  });
});
