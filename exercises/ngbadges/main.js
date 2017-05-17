var app = angular.module("myApp", []);

app.controller("mainController", function ($scope) {

    var badges = [];

    $scope.fillBadge = function (obj) {
        $scope.badges.push(obj);
        obj = {};
        console.log(badges)
        //        console.log($scope.badges);
        //        return $scope.badgeInfo = obj;
    }
})


//ng-repeat="info in badges"
