var app = angular.module("mainApp", []);

app.controller("mainCtrl", ["$scope", "cartoonService", function ($scope, cartoonService) {
    $scope.cartoonList = cartoonService.inputArray;
    $scope.add = function (cartoonInput) {
        var passToService = {
            title: cartoonInput.title,
            url: cartoonInput.url,
            desc: cartoonInput.desc
        }
        cartoonService.addCartoon(passToService)
    };
}])
