angular.module("learningApp", [])

.controller('mainCtrl', function($scope, dataService) {
  $scope.addLearning = function() {
    var learning = {name: "This is a new Learning"};
    $scope.learnings.push(learning);
  };

  $scope.learningNgChange = function() {
    console.log("An input Changed");
  };

  dataService.getLearnings(function(response) {
    console.log(response.data);
    $scope.learnings = response.data;
  })

  $scope.deleteLearning = function(learning, $index) {
    dataService.deleteLearning(learning);
    $scope.learnings.splice($index, 1);
  };

  $scope.saveLearning = function(learning) {
    dataService.saveLearning(learning);
  };
})

.service('dataService', function($http) {
  this.helloConsole = function() {
    console.log('This is the hello console service');
  };

  this.getLearnings = function(callback){
    $http.get('mock/learnings.json').then(callback)
  }

  this.deleteLearning = function(learning) {
    console.log("The " + learning.name + " learning has been deleted");
  };

  this.saveLearning = function(learning) {
    console.log("The " + learning.name + " learning has been saved");
  };

});
