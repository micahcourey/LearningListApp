angular.module("learningApp", [])

.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;

  $scope.learningNgChange = function() {
    console.log("An input Changed");
  };

  dataService.getLearnings(function(response) {
    console.log(response.data);
    $scope.learnings = response.data;
  })

})

.service('dataService', function($http) {
  this.helloConsole = function() {
    console.log('This is the hello console service');
  };

  this.getLearnings = function(callback){
    $http.get('mock/learnings.json').then(callback)
  }

});
