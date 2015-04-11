'use strict';

angular.module('deepDiveApp')
  .controller('DashboardCtrl', function ($scope, $http) {
    $scope.message = 'Hello';


    $http.get('/api/results').success(function(userAnswers) {
      $scope.userAnswers = userAnswers;
      
    });

  });
