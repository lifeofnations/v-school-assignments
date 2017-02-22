angular.module("myApp")

.controller("homeController", ["$scope", "HttpService", function($scope, HttpService) {
    
    $scope.freeChamps = HttpService.freeChamps;

    if (HttpService.freeChamps = []) {
        $scope.freeChamps = function () {
            HttpService.getFreeChamps();
            $scope.freeChamps = HttpService.freeChamps;
            console.log($scope.summoners);
        }
    }
    
    $scope.freeChamps();
    
    
    
}])