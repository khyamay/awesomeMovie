awesomeMovie = angular.module("awesomeMovie", ['ngRoute', 'ngResource']);

awesomeMovie.controller("movieCtrl", function($scope, awesomeMovieFactory){
	$scope.headerSrc = "tmpl/header.html";
	$scope.movies = awesomeMovieFactory.query();

	$scope.currMovie = null;
	$scope.getMovieById = function(id){
		var movies = $scope.movies;
		for (var i = 0; i < movies.length; i++){
			var movie = $scope.movies[i];
			if(movie.id == id){
				$scope.currMovie = movie;
			}
		}
	};

	$scope.back = function(){
		window.history.back();
	};
});

awesomeMovie.controller("movieDetailCtrl", function($scope, $routeParams){
	$scope.getMovieById($routeParams.id);
});