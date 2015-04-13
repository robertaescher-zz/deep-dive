'use strict';

angular.module('deepDiveApp')
  .controller('DashboardCtrl', function ($scope, $http) {
    $scope.results = [];
    $scope.countResult = 0;
    $http.get('/api/results').
		    success(function(data, status, headers, config) {
		      $scope.results = data;
		      $scope.countResult = $scope.results.length;
		      $scope.fallback = "Nenhuma resposta";
		      console.log('yey');
		    }).
		    error(function(data, status, headers, config) {
		      // log error
		      console.log('We failed!');
		    });

	$http.get('/assets/data/questionnaires/questionnaire1.json').success(function(data) {
      $scope.questionnaire = data.questions;
    });
	


	
  });
