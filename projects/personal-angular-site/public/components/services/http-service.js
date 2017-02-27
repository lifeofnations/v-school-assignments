angular.module("myApp")

.service("HttpService", ["$http", "Key", "$sce", function ($http, Key, $sce) {
    var self = this;

    this.freeChamps = [];
    this.trackedPlayers = [];
    this.trackedPlayersMains = [];
    this.playerMainInfo = [];
    this.allChamps = [];

    this.getFreeChamps = function () {
        $http.get("https://na.api.pvp.net/api/lol/na/v1.2/champion?freeToPlay=true&api_key=" + Key.key)
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
                    $http.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/" + response[i] + "?champData=image&api_key=" + Key.key)
                    .then(function (response) {
                        self.freeChamps.push(response.data);
                        return response.data;
                    }),
                    function (response) {
                        console.log("error");
                    }
            })
    };

    this.getStats = function (ids, names) {
        console.log(names);
        for (var i = 0; i < ids.length; i++) {
            $http.get("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + ids[i] + "/ranked?season=SEASON2017&api_key=" + Key.key)
                .then(function (response) {
                        console.log(names, "1");
                        self.trackedPlayers.push(response.data);
                        console.log(response.data);
                        var main = response.data.champions;
                        main = main.sort((a, b) => b.stats.totalSessionsPlayed - a.stats.totalSessionsPlayed);
                        console.log(main);
                        self.trackedPlayersMains.push(main[1]);
                        $http.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/" + main[1].id + "?champData=image&api_key=" + Key.key)
                            .then(function (response) {

                                    console.log(names, "2")
//                                    response.data["playerName"] = names.[i];
                                    self.playerMainInfo.push(response.data);
                                },
                                function (response) {
                                    console.log('error');
                                })
                    },
                    function (response) {
                        console.log("error")
                    })
        }
    };

    //    this.getMainInfo = function (mains) {
    //        for (var i = 0; i < mains.length; i++) {
    //            $http.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/" + mains[i] + "?champData=image&api_key=" + Key.key)
    //                .then(function (response) {
    //                        self.playerMainInfo.push(response).data;
    //                    },
    //                    function (response) {
    //                        console.log('error');
    //                    })
    //        }
    //    }

    this.getAllChampions = function () {
        if (self.allChamps.length !== 0) return;
        return $http.get("https://na.api.pvp.net/api/lol/na/v1.2/champion?api_key=" + Key.key)
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
                    $http.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/" + response[i] + "?champData=image,skins&api_key=" + Key.key)
                    .then(function (response) {
                        self.allChamps.push(response.data);
                        return response.data;
                    }),
                    function (response) {
                        console.log("error");
                    }
            })
    };

    this.getSplash = function () {

    }

}])