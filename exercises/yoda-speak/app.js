angular.module("myApp", [])

.controller("myController", ["$scope", "YodaService", function ($scope, YodaService) {
    $scope.translate = function (text) {
        YodaService.translate(text)
            .then(function (response) {
                $scope.yoda = response;
                $scope.yodaText = "";
            })
    }








}]);