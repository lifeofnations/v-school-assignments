angular.module("myApp")

.service("PonyService", ["$http", function ($http) {
    var self = this;

    this.ponies = [];

    this.addPony = function (pony, isUpdate) {
        var input = "post", id = "";
        if (isUpdate) input = "put", id = pony._id;
        return $http[input]("/ponies/" + id, pony)
            .then(function (response) {
                return self.ponies;
            }, function (response) {
                console.log("error");
            })
    };

    this.removePony = function (index) {
        return $http.delete("/ponies/" + self.ponies[index]._id)
            .then(function (response) {
                return response.data;
            },
            function (response) {
                console.log(response, "error");
            })
    };

    this.getPonies = function () {
        return $http.get("/ponies")
            .then(function (response) {
                self.ponies = response.data;
                return self.ponies;
            },
            function (response) {
                console.log("error", response);
            })
    };

}]);