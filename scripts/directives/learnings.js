angular.module('learningApp')
.directive('learnings', function() {
  return {
    templateUrl: 'templates/learnings.html',
    controller: 'mainCtrl',
    replace: true
  }
})
