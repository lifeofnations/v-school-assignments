angular.module("myApp")

.service("PonyService", ["$http", function ($http) {
    var self = this;

    this.ponies = [];

    // this.addPony = function () {
    //
    // };

    // this.removePony = function () {
    //
    // };

    this.getPonies = function () {
        console.log("trying");
        return $http.get("/ponies")
            .then(function (response) {
                self.ponies = response.data;
                return self.ponies;
            },
            function (response) {
                console.log("error", response);
            });
    };

}]);