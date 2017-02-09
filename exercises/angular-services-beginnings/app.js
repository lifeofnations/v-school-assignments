angular.module("myApp", [])

.controller("myController", ["$scope", "PokeService", function($scope, PokeService) {
    
    $scope.pokemon = PokeService.pokemon; 
    
    $scope.add = function (name) {
        if (!$scope.pokeName) return "error";
        PokeService.addPokemon(name);
        $scope.pokeName = "";
    }
    
    $scope.remove = function(name) {
        PokeService.removePokemon(name);
        $scope.pokeName = "";
    }
    
    
}])


