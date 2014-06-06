awesomeMovie = angular.module("awesomeMovie", ['ngRoute']);

awesomeMovie.controller("movieCtrl", function($scope){
	$scope.headerSrc = "tmpl/header.html";

	$scope.movies = [
		{
        "id": 0,
        "name": "Iron Man",
        "rating": 5,
        "availability": 9,
        "review": "Tony Stark is a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man. (Paramount Pictures, Marvel Studios)",
        "thumb": "http://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg"
        },
    {
        "id": 1,
        "name": "Jurassic Park",
        "rating": 5,
        "availability": 3,
        "review": "Featuring incredible special effects and action - packed drama, Jurassic Park takes you to a remote island where an amazing theme park with living dinosaurs is about to turn deadly, as five people must battle to survive among the prehistoric predators.(Universal Pictures)",
        "thumb": "http://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg"
        },
    {
        "id": 2,
        "name": "Transformers",
        "rating": 5,
        "availability": 5,
        "review": "Transformers: Dark of the Moon features Sam Witwicky taking his first tenuous steps into adulthood while remaining a reluctant human ally of Optimus Prime. The film centers around the space race between the U.S.S.R. and the USA, suggesting there was a hidden Transformers role in it all that remains one of the planet's most dangerous secrets. The villain of the third film will be Shockwave. (DreamWorks Pictures)",
        "thumb": "http://upload.wikimedia.org/wikipedia/en/6/66/Transformers07.jpg"
        },
    {
        "id": 3,
        "name": "Avatar",
        "rating": 4,
        "availability": 3,
        "review": "Jake Sully is a former Marine confined to a wheelchair. But despite his broken body, Jake is still a warrior at heart. He is recruited to travel light years to the human outpost on Pandora, where a corporate consortium is mining a rare mineral that is the key to solving Earth's energy crisis. Because Pandora's atmosphere is toxic, they have created the Avatar Program, in which human drivers  have their consciousness linked to an avatar, a remotely-controlled biological body that can survive in the lethal air. These avatars are genetically engineered hybrids of human DNA mixed with DNA from the natives of Pandora... the Na'vi. Reborn in his avatar form, Jake can walk again. He is given a mission to infiltrate the Na'vi, who have become a major obstacle to mining the precious ore. But a beautiful Na'vi female, Neytiri, saves Jake's life, and this changes everything. Jake is taken in by her clan, and learns to become one of them, which involves many tests and adventures. As Jake's relationship with his reluctant teacher Neytiri deepens, he learns to respect the Na'vi way and finally takes his place among them. Soon he will face the ultimate test as he leads them in an epic battle that will decide the fate of an entire world. (20th Century Fox)",
        "thumb": "http://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg"
        }
	];

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