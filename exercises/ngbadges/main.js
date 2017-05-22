var app = angular.module("myApp", []);

app.controller("mainController", function ($scope) {
    $scope.badges = [];
    $scope.obj = {};

    $scope.fillBadge = function (obj) {
        var badgeInfo = {
            fName: obj.fName,
            lName: obj.lName,
            eml: obj.eml,
            birthPlace: obj.birthPlace,
            phone: obj.phone,
            food: obj.food,
            about: obj.about
        }
        $scope.badges.push(badgeInfo)
        $scope.obj = {}
        console.log(obj);
    }
})
