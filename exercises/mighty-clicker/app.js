angular.module("myApp", [])

.controller("myController", ["$scope", "RedService", "BlueService", function($scope, RedService, BlueService) {
    
    $scope.redCount = 100;
    $scope.blueCount = 100;
    
    
    $scope.redButton = function (red, blue) {
        $scope.redCount = RedService.increment(red);
        $scope.blueCount = BlueService.decrement(blue);
        if ($scope.blueCount === 0) {
            $scope.blueCount = BlueService.reset();
        }
    }
    
    $scope.blueButton = function (red, blue) {
        $scope.redCount = RedService.decrement(red);
        $scope.blueCount = BlueService.increment(blue);
        if ($scope.redCount === 0) {
            $scope.redCount = RedService.reset();
        }
    }
    
    
    
    
    
}])