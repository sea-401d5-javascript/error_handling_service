'use strict';
const angular = require('angular');
require('angular-mocks');

describe('error service tests', function() {
  let errorService;
  beforeEach(() => {
    angular.mock.module('NotesApp');
    angular.mock.inject(function(ErrorService){
      errorService = ErrorService;
    });
  });
  it('should have test ErrorService', () => {
    expect(typeof errorService.getErrors).toBe('string');
    expect(errorService).toBe('function');
  });
});
