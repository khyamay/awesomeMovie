
awesomeMovie.factory('awesomeMovieFactory', function($resource){
	return $resource('/movies');
});

awesomeMovie.factory('bookingFactory', function($resource){
	return $resource('/bookings');
})