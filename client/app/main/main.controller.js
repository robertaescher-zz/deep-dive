'use strict';

angular.module('deepDiveApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.questions = [];
    $scope.answers = [];

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
    
    $scope.generateDash = function() { //Não funciona...
        $http
        .post('/api/answers', {options2: $scope.answer})
        .success(function(data){
            console.log('AAAAAA...SUCESSO');
        })
        .error(function(data){
            console.log('Error: ' + data);
        });
    };

    $scope.submit = function() { //Funciona
    $http
        .post('/api/answers', {teste: $scope.answer.teste})
        .success(function(data){
            console.log('AAAAAA...SUCESSO');
        })
        .error(function(data){
            console.log('Error: ' + data);
        });
  };

  });

    