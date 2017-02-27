angular.module("myApp", ["ngRoute", "ngAnimate"])

.config(["$routeProvider", function($routeProvider) {
    
    $routeProvider
        .when("/home", {
            templateUrl: "components/controllers/home/home.html",
            controller: "homeController"
        })
        .when("/find", {
            templateUrl: "components/controllers/find/find.html",
            controller: "findController"
        })
        .when("/champions", {
            templateUrl: "components/controllers/ranked/ranked.html",
            controller: "rankedController"
        })
        .when("/champions/:name", {
            templateUrl: "components/controllers/ranked/ranked.html",
            controller: "rankedController"
        })
        .when("/about", {
            templateUrl: "components/controllers/about/about.html",
            controller: "aboutController"
        })
        .otherwise("/home")
      
}]);















//CORS Cross Origin Resource Sharing
//<script> is exempt from CORS
//JSON P json w/ Padding
//json p sneaks requests in to script tags..


//inject $sce to service
//$http.jsonp($sce.trustAsResourceUrl"http://....");




//http://ddragon.leagueoflegends.com/cdn/7.3.1/img/ 

//https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/Grogzog?api_key=RGAPI-0435bb9b-fa40-449e-a833-282955297060


//Key: RGAPI-0435bb9b-fa40-449e-a833-282955297060


//[The title of Your Application] isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.