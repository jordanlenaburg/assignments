angular.module("mainApp")
.controller("favCtrl", ["$scope", "favService", "imgService", function ($scope, favService, imgService) {
    $scope.config = {};
    $scope.favorites = [];
    favService.getFavList($scope.config)
        .then(
            function (response) {
                $scope.favorites = response;
                return response
            }
        );
    // var imgConfig = {
    //     params: {
    //         ref: 82166
    //     }
    // };
    // var imgUrl = "";
    // imgService.getList(imgConfig)
    //     .then(
    //         function (response) {
    //             var n = response.search("http://galleries.burningman.org/filestore");
    //             imgUrl = response.slice(n, n + 96);
    //             console.log(imgUrl);
    //             return response
    //         }
    //     )

}]);