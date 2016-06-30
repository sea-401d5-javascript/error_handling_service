'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client.js');

describe('service unit test', () => {
  let errHandServ;
  beforeEach(() => {
    angular.mock.module('ErrorApp');
    angular.mock.inject(function(ErrorService) {
      errHandServ = ErrorService;
    });
  });

  it('should have getErrors as function', () => {
    expect(typeof errHandServ.getErrors).toBe('function');
  });

  it('should have logError as function', () => {
    expect(typeof errHandServ.logError).toBe('function');
  });

  it('should get an array', () => {
    expect(Array.isArray(errHandServ.getErrors())).toBe(true);
  });

  it('should add an error to the errors array', () => {
    errHandServ.logError('test')();
    let errorArray = errHandServ.getErrors();
    expect(errorArray[0]).toBe('test');
  });
});
