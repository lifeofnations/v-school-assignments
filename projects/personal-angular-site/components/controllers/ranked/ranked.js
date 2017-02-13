angular.module("myApp")

.controller("rankedController", ["$scope", "$routeParams", "HttpService", function ($scope, $routeParams, HttpService) {

    $scope.allChamps = HttpService.allChamps;
    $scope.skin = 0;
    $scope.getChamps = function () {
        HttpService.getAllChampions()
        $scope.allChamps = HttpService.allChamps;
        console.log($scope.allChamps);
    }
    
    $scope.getChamps();
    $scope.name = $routeParams.name;

    $scope.select = function (index) {
        $scope.name = $routeParams.name;
        $scope.allChamps[index].currentSkin = 0;   
    }
    
    $scope.newSkin = function(index, pIndex) {
        $scope.allChamps[pIndex].currentSkin = index;
    }

}])