angular.module("myApp")


.service("HttpService", ["$http", function ($http) {
    var self = this;

    this.trackedSummoners = [];
    this.getPlayer = function (key) {
        $http.get("https://na.api.pvp.net/api/lol/na/v1.2/champion?freeToPlay=true&api_key=" + key)
            .then(function (response) {
                    var ids = [];
                    for (var i = 0; i < response.data.champions.length; i++) {
                        ids.push(response.data.champions[i].id);
                    }
                    return ids;
                },
                function (response) {
                    console.log(response, "error");
                })
            .then(function (response) {
                for (var i = 0; i < response.length; i++)
                    $http.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/" + response[i] + "?champData=image&api_key=" + key)
                    .then(function (response) {
                        self.trackedSummoners.push(response.data);
                    }),
                    function (response) {
                        console.log("error");
                    }


            })
    };

    this.getStats = function (playerId) {
        //http to get stats for a player by their id this will be saved in session storage..
    };

    this.getRanked = function (player) {
        //http to get ranked stats for a player, leagues and stuff session too
    };


}])