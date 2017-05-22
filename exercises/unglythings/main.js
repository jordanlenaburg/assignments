var app = angular.module("myApp", []);



app.controller("myCtrl", ["$scope", function ($scope) {

    $scope.allPosts = [];

    $scope.submit = function (post) {
        console.log(post)
        $scope.allPosts.push(post);
        $scope.post = {};
    };



}])
