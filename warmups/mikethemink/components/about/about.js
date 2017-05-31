var app = angular.module("mainApp");

app.controller("aboutCtrl", ["$scope", "populationService", "countryInfoService", function ($scope, populationService, countryInfoService) {

    $scope.population = {};

    populationService.getRequest()
        .then(
            function (data) {
                $scope.population = data.data.dataset;
                $scope.population.popUpdated = data.data.dataset.updated.replace("T", " ");
                $scope.population.popUpdated = $scope.population.popUpdated.replace("Z", "");
                console.log($scope.population)
            }
        );

    $scope.countryInfo = {};

    countryInfoService.getRequest()
        .then(
            function (data) {
                $scope.countryInfo = data;
                console.log($scope.countryInfo)
            }
        );
}])
