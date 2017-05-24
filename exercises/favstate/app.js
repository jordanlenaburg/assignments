var app = angular.module("mainApp", ["ngRoute"]);




app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "homeCtrl"
        })
        .when("/about", {
            templateUrl: "components/about/about.html",
            controller: "aboutCtrl"
        })
        .when("/whyilove", {
            templateUrl: "components/whyilove/whyilove.html",
            controller: "whyiloveCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        });

}]);
