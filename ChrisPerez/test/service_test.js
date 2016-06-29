'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

describe('Error handling service tests', ()=>{
  let $http;
  let errorService;
  let mockErr;
  beforeEach(()=>{
    angular.mock.module('FirstApp');
    angular.mock.inject(function(_$http_, ErrorHandlingService){
      $http = _$http_;
      errorService = ErrorHandlingService;
    });
    mockErr = function(item){
      $http.post('http://www.badurl.fart', item)
        .then((res)=>{
          console.log('How did this work?', res);
        }, errorService.logError('Error Message'));
    };
  });
  it('should test the error service or whatever', ()=>{
    expect(typeof errorService.getErrors).toBe('function');
    expect(typeof errorService.logError).toBe('function');
    expect(Array.isArray(errorService.getErrors())).toBe(true);
  });
  it('should test stuff after functions are called', ()=>{
    mockErr({wat: 'wat'});
    console.log(errorService.getErrors());
  });
});
