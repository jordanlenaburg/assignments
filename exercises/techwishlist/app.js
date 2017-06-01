var app = angular.module("mainApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/phones", {
            templateUrl: "components/phones/phones.html",
            controller: "phonesCtrl"
        })
        .when("/tech", {
            templateUrl: "components/tech/tech.html",
            controller: "techCtrl"
        })
}])

app.directive("navbar", function () {

    return {
        templateUrl: "components/navbar/navbar.html",
        restrict: "E"
    },
})
