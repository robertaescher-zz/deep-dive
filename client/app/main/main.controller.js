'use strict';

angular.module('deepDiveApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeQuestions = [];

    $http.get('/api/questions').success(function(awesomeQuestions) {
      $scope.awesomeQuestions = awesomeQuestions;
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
  });
