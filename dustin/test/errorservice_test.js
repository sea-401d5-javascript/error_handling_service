const angular = require('angular');
require('angular-mocks');
require('../app/js/client.js');

describe('Error service', () => {
  let errorService;

  beforeEach(() => {
    angular.mock.module('FirstApp');
    angular.mock.inject(function (ErrorService) {
      errorService = ErrorService;
    });
  });

  it('should have a log Error function', () => {
    expect(typeof errorService.logError).toBe('function');
  });

  it('should have a get Errors function', () => {
    expect(typeof errorService.getErrors).toBe('function');
  });

  it('should accept and error and return it on an array', () => {
    errorService.logError('message')('error');
    let e = errorService.getErrors();
    expect(e).toBe(['error']);
  });


});
