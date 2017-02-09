angular.module("myApp")


.service("HitService", ["$http", function ($http) {
    this.hitList = function () {
        return $http.get("http://api.vschool.io:6543/hitlist.json")
            .then(function (response) {
                return response.data;
            })
    }

}])