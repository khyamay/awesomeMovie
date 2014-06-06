awesomeMovie.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'tmpl/home.html',
			controller: 'movieCtrl'
		}).when('/movie/:id', {
			templateUrl: 'tmpl/movie.html',
			controller: 'movieDetailCtrl'
		}).when('/bookings', {
			templateUrl: 'tmpl/bookings.html',
			controller: 'bookingDetailsCtrl'
		})
		.when('/bookTickets/:id', {
			templateUrl: 'tmpl/bookTickets.html',
			controller: 'bookTicketsCtrl'
		}).otherwise({
			redirectTo: '/'
		});
});