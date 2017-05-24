var app = angular.module("routingApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home.html",
            controller: "homeCtrl"
        });
}]);
