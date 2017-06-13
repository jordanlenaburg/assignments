angular.module("mainApp")
    .controller("singleFavCtrl", ["$scope", "$routeParams", "favService", "imgService", function ($scope, $routeParams, favService, imgService) {
        $scope.singlePiece = {};
        favService.getOneFav($routeParams.id)
            .then(
                function (response) {
                    $scope.singlePiece = response;
                    return response
                }
            );
        var imgConfig = {
            params: {
                ref: 82166
            }
        };
        var imgUrl = "";
        imgService.getList(imgConfig)
            .then(
                function (response) {
                    var n = response.search("http://galleries.burningman.org/filestore");
                    imgUrl = response.slice(n, n + 96);
                    console.log(imgUrl);
                    return response
                }
            )
    }]);