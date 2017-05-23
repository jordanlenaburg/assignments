var app = angular.module("myApp", []);

app.controller("sumCtrl", ["$scope", function ($scope) {

    $scope.makeSum = function (sum1, sum2) {
        $scope.totalSum = parseInt(sum1) + parseInt(sum2);
        alert("The sum is " + $scope.totalSum)
    };
}]);

app.controller("prodCtrl", ["$scope", function ($scope) {

    $scope.makeProd = function (prod1, prod2) {
        $scope.totalProd = parseInt(prod1) * parseInt(prod2);
    };
}]);
