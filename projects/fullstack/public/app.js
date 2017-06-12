// Create Primary Module
// Add config for routing
// var base64 = require("angular-base64");

angular.module("mainApp", ["ngRoute"])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "components/home/home.html"
                //controller:
            })
            .when("/query", {
                templateUrl: "components/query-results/query.html",
                controller: "queryCtrl"
            })
            .when("/favorites", {
                templateUrl: "components/favorites/favorites.html"
                //controller:
            })
            .when("/favorites/:id", {})
            .otherwise({
                redirectTo: "/home"
            })
    }]);
    // .config(function($httpProvider, $base64) {
    //     var auth = $base64.encode("c02cd0af512b03a31adfd96274d740f1");
    //     $httpProvider.defaults.headers.common['Authorization'] = 'Basic ' + auth;
    // })