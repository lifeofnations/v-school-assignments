angular.module("myApp")

.service("HitService", ["$http", function ($http) {

    this.find = function (id) {
        var hit = "";
        if (id) hit = id;
        return $http.get("/bounties" + hit)
            .then(function (response) {
                    console.log(response.data);
                    return response.data;
                },
                function (response) {
                    console.log("error");
                }
            )
    };
    this.add = function (toAdd) {
        return $http.post("/bounties", toAdd)
            .then(function (response) {
                    console.log("success");
                    return "success";
                },
                function (response) {
                    console.log("error");
                }
            )
    };


}]);