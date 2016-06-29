module.exports = function(app) {
  app.controller('FirstApp', ['$scope', function() {
    this.firstname = 'foo';
    this.lastname = 'bar';
    this.fullname = function() {
      return this.firstname + ' ' + this.lastname;
    };
  }]);
};
