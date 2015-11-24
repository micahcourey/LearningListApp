'use strict';

angular.module('learningApp')
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

  this.saveLearnings = function(learnings) {
    console.log(learnings.length + " learnings have been saved");
  };

});
