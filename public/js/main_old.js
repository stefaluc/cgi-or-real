var answer;

var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/cgi", {
		templateUrl: function(params) {
			if(answer == 'cgi') return 'correct.htm';
			else return 'incorrect.htm';
		}
	})
	.when("/real", {
		templateUrl: function(params) {
			if(answer == 'real') return 'correct.htm';
			else return 'incorrect.htm';
		}
	});
});

app.controller('MainCtrl', function($scope) {
	var images = [
		{src: 'images/00.jpg', answer: 'real'},
		{src: 'images/01.jpg', answer: 'cgi'}
	];
	//server page random image
	$scope.random = images[Math.floor((Math.random() * 2))];
	answer = $scope.random.answer;
});