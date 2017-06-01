var app = angular.module("mainApp", [])


app.controller("mainCtrl", ["$scope", "httpService", function ($scope, httpService) {

    $scope.get10 = function (page) {
        httpService.getRequest(page)
            .then(
                function (response) {
                    return response
                }
            )
    }
}])
