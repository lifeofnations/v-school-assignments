var app = angular.module("myApp", []);

app.controller("myController", ["$scope", "$http", function($scope, $http) {
    
    $http.get("http://swapi.co/api/films/1")
        .then(function(response) {
            $scope.movie = response.data;
            console.log($scope.movie.opening_crawl);
            $scope.movie.opening_crawl = $scope.movie.opening_crawl.split("\n");
            console.log($scope.movie);
    })
    
    
    
    
    
    
    
    
    
    
    
}])