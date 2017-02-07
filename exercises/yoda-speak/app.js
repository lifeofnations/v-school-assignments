var app = angular.module("myApp", []);

app.controller("myController", ["$scope", "$http", function ($scope, $http) {

    $scope.translate = function (text) {
        var config = {
            headers: {
                'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
            }
        };
        $http.get("https://yoda.p.mashape.com/yoda?sentence=" + text, config)
            .then(function (response) {
                    $scope.yoda = response.data;
                    $scope.yodaText = "";
                },
                function (response) {
                    console.log("error");
                })
    }








}]);