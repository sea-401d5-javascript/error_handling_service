module.exports = function(app) {
  app.controller('ErrController', function(ErrService) {
    this.printErr = ErrService.getError();
  });
};

// module.exports = function(app) {
//   app.controller('ErrApp', ['$sope', function() {
//     this.title = 'Top Dog';
//     this.year = 1972;
//     this.entry = function() {
//       return this.title + 'kickin\' ass since ' + this.year;
//     };
//   }]);
// };
