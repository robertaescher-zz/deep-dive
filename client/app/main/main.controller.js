'use strict';

angular.module('deepDiveApp')
  .controller('MainCtrl', function ($scope, $http) {
    // $scope.questions = [];
    // $scope.answers = [];

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
    $scope.selectedAnswer = {
      isUserAnswer: true,
      question_id: $scope.questions[0]._id, 
      answer: $scope.questions[0].choices[3].text
    };
    $http
        .post('/api/answers', {selectedAnswer:[$scope.selectedAnswer]})
        .success(function(data){
            console.log('AAAAAA...SUCESSO');
        })
        .error(function(data){
            console.log('Error: ' + data);
        });
    };

    $scope.submit = function() { //Funciona
    $http
        .post('/api/answers', {isUserAnswer: $scope.answer.teste})
        .success(function(data){
            console.log('AAAAAA...SUCESSO');
        })
        .error(function(data){
            console.log('Error: ' + data);
        });
  };

  });

    