var app = angular.module("myApp", []);

app.controller("myCtrl", ["$scope", "httpService", function ($scope, httpService) {

    $scope.hitList = [];

    $scope.getList = function (url) {
        httpService.getRequest(url).then(
            function (serviceResponse) {
                $scope.hitList = serviceResponse;
            },
            function (serviceResponse) {
                console.log(serviceResponse);
            }
        )
    }
    $scope.getList("http://api.vschool.io:6543/hitlist.json");

        }]);


app.service("httpService", ["$http", function ($http) {

        this.getRequest = function (url) {
            return $http.get(url).then(
                function (serverResponse) {
                    //                    console.log(serverResponse.data)
                    return serverResponse.data;
                },
                function (serverResponse) {
                    console.log(serverResponse.status)
                }
            )
        }
    }
]);
