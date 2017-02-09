angular.module("myApp")

.controller("homeController", ["$scope", "HttpService", "Key", function($scope, HttpService, Key) {
    
    $scope.summoners = HttpService.trackedSummoners;
    
    $scope.findSummoner = function (key) {
        HttpService.getPlayer(key);
        $scope.summoners = HttpService.trackedSummoners;
        $scope.summonerName = "";
        console.log($scope.summoners);
    }
    
    $scope.findSummoner(Key.key);
    
    
    
}])