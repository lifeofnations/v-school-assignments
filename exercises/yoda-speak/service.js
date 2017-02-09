angular.module("myApp")

.service("YodaService", ["$http", function($http) {
    
    this.translate = function (text) {
        var config = {
            headers: {
                'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
            }
        };
        return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + text, config)
            .then(function (response) {
                    return response.data;
                    $scope.yodaText = "";
                },
                function (response) {
                    console.log("error");
                    return "error";
                })
    }
    
    
    
}])