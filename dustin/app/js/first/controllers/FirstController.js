module.exports = function(app) {
  app.controller('MyController', ['$scope', function(ErrorService) {
    this.firstname = 'foo';
    this.lastname = 'bar';
    this.fullname = function() {
      return this.firstname + ' ' + this.lastname;
    };
  }]);
};
