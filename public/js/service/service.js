awesomeMovie.factory('awesomeMovieFactory', function($resource){
	return $resource('/movies');
});