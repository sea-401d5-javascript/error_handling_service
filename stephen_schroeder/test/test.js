'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

describe('error service tests', function() {
  let errorService;
  beforeEach(() => {
    angular.mock.module('ErrApp');
    angular.mock.inject(function(ErrService) {
      errorService = ErrService;
    });
  });
  it('should have a getter', () => {
    expect(typeof errorService.printErr).toBe('function');
  });
  it('getError, called, should get an array', () => {
    expect(Array.isArray(errorService.getError())).toBe(true);
  });
  it('logError should add an error to the log', () => {
    errorService.printErr('test error')({});
    let errorArray = errorService.getError();
    expect(errorArray[0]).toBe('test error');
  });
});
