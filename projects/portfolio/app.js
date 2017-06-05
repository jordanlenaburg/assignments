var app = angular.module("mainApp", ["ngRoute"])

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html"
        })
        .when("/resume", {
            templateUrl: "components/resume/resume.html"
        })
        .when("/about", {
            templateUrl: "components/about/about.html"
        })
        .when("/projects", {
            templateUrl: "components/projects/projects.html"
        })
        .when("/contact", {
            templateUrl: "components/contact/contact.html",
            controller: "contactCtrl"
        })
        .when("/intro", {
            templateUrl: "components/intro/intro.html"
        })
        .otherwise({
            redirectTo: "/intro"
        })
}]);

app.directive("navbar", function () {

    return {
        templateUrl: "components/navbar/navbar.html",
        restrict: "E"
    }
})

app.directive("footer", function () {

    return {
        templateUrl: "components/navbar/footer.html",
        restrict: "E"
    }
})
