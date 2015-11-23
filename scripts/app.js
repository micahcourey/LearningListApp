angular.module("learningApp", [])

.controller('mainCtrl', function($scope) {
  $scope.learningNgChange = function() {
    console.log("An input Changed")
  };
  $scope.learnings = [
    {"name": "JavaScript"},
    {"name": "AngularJS"},
    {"name": "Node.js"},
    {"name": "Sass"},
    {"name": "MongoDB"},
  ]

});
