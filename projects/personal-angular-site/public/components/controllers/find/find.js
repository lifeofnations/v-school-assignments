angular.module("myApp")

.controller("findController", ["$scope", "HttpService", function($scope, HttpService) {
    
    $scope.playerIds = ["20303837", "20379431", "24820748"];
    $scope.playerNames = ["Grogzog", "KelsonOnFire", "Zarclock"];
    $scope.playerStats = [];
    $scope.playerMains = [];
    $scope.playerMainInfo = [];
    
    $scope.getStats = function(ids, playerNames) {
        HttpService.getStats(ids, playerNames)
        $scope.playerStats = HttpService.trackedPlayers;
        $scope.playerMains = HttpService.trackedPlayersMains;
        console.log($scope.playerMains);
        $scope.playerMainInfo = HttpService.playerMainInfo;
        console.log($scope.playerMainInfo);
    }
    
    $scope.getStats($scope.playerIds, $scope.playerNames);
    
    
    
    
}])