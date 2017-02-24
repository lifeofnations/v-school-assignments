angular.module("myApp")

    .controller("ponyController", ["$scope", "PonyService", function ($scope, PonyService) {

        $scope.ponies = [];

        $scope.getPonies = function () {
            PonyService.getPonies()
                .then(function (response) {
                    $scope.ponies = response;
                });
        };

        $scope.getPonies();

    }]);