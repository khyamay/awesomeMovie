awesomeMovie = angular.module("awesomeMovie", ['ngRoute', 'ngResource']);
awesomeMovie.controller("movieCtrl", function($scope, awesomeMovieFactory, $location){
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

    $scope.getCount = function(n){
        return new Array(n);
    }

    $scope.isActive = function(route){
        return route === $location.path();

    }

    $scope.isActivePath = function(route){
        return ($location.path()).indexOf(route) >= 0;
    }
});

awesomeMovie.controller("movieDetailCtrl", function($scope, $routeParams){
	$scope.getMovieById($routeParams.id);
});

awesomeMovie.controller("bookTicketsCtrl", function($scope, $http, $location, $routeParams){
    $scope.getMovieById($routeParams.id);
    $scope.onlyNumbers= /^\d+$/;
    $scope.formData={};
    $scope.formData.movie_id = $scope.currMovie.id;
    $scope.formData.movie_name = $scope.currMovie.name;
    $scope.formData.data = "Today";
    
    $scope.processForm = function(){
        $http({
            method: 'POST',
            url: '/book',
            data: $.param($scope.formData),
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).success(function(data){
            $location.path("/bookings");
        })
    };
    
});
awesomeMovie.controller('bookingDetailsCtrl', function($scope, bookingFactory){
        $scope.bookings = bookingFactory.query();
    });