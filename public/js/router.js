awesomeMovie.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'tmpl/home.html',
			controller: 'movieCtrl'
		}).when('/movie/:id', {
			templateUrl: 'tmpl/movie.html',
			controller: 'movieDetailCtrl'
		}).otherwise({
			redirectTo: '/'
		})
});