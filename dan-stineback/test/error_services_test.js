'use strict';
const angular = require('angular');
require('angular-mocks');

describe('error service tests', function() {
  let ErrorService;
  beforeEach(() => {
    angular.mock.module('NotesApp');
    angular.mock.inject(function(ErrorService){
      ErrorService = ErrorService;
    })
  });
});
