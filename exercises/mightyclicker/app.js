var app = angular.module("mainApp", [])


app.controller("mainCtrl", ["$scope", "redService", "blueService", function ($scope, redService, blueService) {

    $scope.red = redService.score;
    $scope.blue = blueService.score;

    $scope.redButton = function () {
        if ($scope.blue <= 1) {
            redService.reset();
            blueService.reset();

        } else {
            redService.increment();
            blueService.decrement();
        }
        $scope.red = redService.score;
        $scope.blue = blueService.score;
    };

    $scope.blueButton = function () {
        if ($scope.red <= 1) {
            redService.reset();
            blueService.reset();
        } else {
            blueService.increment();
            redService.decrement();
        }
        $scope.red = redService.score;
        $scope.blue = blueService.score;
    }
}])
