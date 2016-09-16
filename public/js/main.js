var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/cgi", {
		template: function(params) {console.log(); return '<h1 class="red">Bananas</h1>';}
	})
	.when("/real", {
		template: function(params) {return 'Pears';}
	});
});

app.controller('MainCtrl', function($scope) {
	var images = [
		{src: 'images/00.jpg', answer: 'real'},
		{src: 'images/01.jpg', answer: 'cgi'}
	];
	$scope.random = images[Math.floor((Math.random() * 2))];

	app.config(function($routeProvider) {
		$routeProvider
		.when("/cgi", {
			template: function(params) {return $scope.random;}
		})
		.when("/real", {
			template: function(params) {return 'Pears';}
		});
	});
});