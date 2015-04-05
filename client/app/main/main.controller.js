'use strict';

angular.module('deepDiveApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.questions = [];

    $http.get('/api/questions').success(function(questions) {
      $scope.questions = questions;
    });

    $scope.addQuestion = function() {
      if($scope.newQuestion === '') {
        return;
      }
      $http.post('/api/questions', { name: $scope.newQuestion });
      $scope.newQuestion = '';
    };

    $scope.deleteThing = function(question) {
      $http.delete('/api/questions/' + question._id);
    };
    
    $scope.generateDash = function() {
        $scope.answers = $scope.questions;
        $http.post('/api/answers', {questions: $scope.answers});
    };
  });

    