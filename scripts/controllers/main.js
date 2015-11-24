'use strict';

angular.module('learningApp')
.controller('mainCtrl', function($scope, dataService) {
  $scope.addLearning = function() {
    var learning = {name: "Click here to enter your a new topic to learn"};
    $scope.learnings.unshift(learning);
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

  $scope.saveLearnings = function() {
    var filteredLearnings = $scope.learnings.filter(function(learning) {
      if(learning.edited) {
        return learning;
      };
    })
    dataService.saveLearnings(filteredLearnings);
  };
})
