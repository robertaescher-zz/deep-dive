'use strict';

angular.module('deepDiveApp')
  .controller('MainCtrl', function ($scope, $http) {
    var createResults;
    $scope.title = null; // questionnaire title
    $scope.questionnaire = []; // questionnaire questions
    $scope.results = []; // user results

    $http.get('/assets/data/questionnaires/questionnaire1.json').success(function(data) {
      $scope.title = data.title;
      $scope.questionnaire = data.questions;
      createResults();
    });

    // prepare array of result objects
    createResults = function () {
      var len = $scope.questionnaire.length;
      for (var i = 0; i < len; i++) {
        $scope.results.push({
          _id:        $scope.questionnaire[i]._id,
          answer:     $scope.questionnaire[i].answer,
          userChoice: null,
        });
      }
    };
    
    // used for multiple correct type questions
    $scope.checkUserMultiCorrectChoice = function (question, userChoice) {
      // create blank array
      if ($scope.results[question - 1].userChoice === null) {
        $scope.results[question - 1].userChoice = [];
      }

      // find choice, if not there the add or if there remove
      var pos = $scope.results[question - 1].userChoice.indexOf(userChoice);
      if (pos < 0) {
        $scope.results[question - 1].userChoice.push(userChoice);
        console.log('selecionei');

      } else {
        $scope.results[question - 1].userChoice.slice(pos, 1);
      }
      
      return $scope.results;
    };
    
    

     $scope.saveResult = function() {
      $http.post('/api/results', { userAnswers: $scope.results }).success(function(data){
            console.log('AAAAAA...SUCESSO');
        });
      $scope.results = {};
    };



  });

    