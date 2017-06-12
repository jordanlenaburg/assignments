angular.module("mainApp")
    .controller("queryCtrl", ["$scope", "bmService", function ($scope, bmService) {
        $scope.config = {
            params: {
                year: 2016
            }
        };
        // bmService.test();
        $scope.getBmList = function () {
            bmService.getList($scope.config)
                .then(
                    function (response) {
                        return response
                    }
                )
        }
        $scope.getBmList();
    }]);