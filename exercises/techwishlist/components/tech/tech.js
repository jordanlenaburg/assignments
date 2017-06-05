var app = angular.module("mainApp");

app.controller("techCtrl", ["$scope", function ($scope) {

    $scope.techList = [
        {
            name: "Altwork Station",
            image: "images/altwork-station-2.jpg",
            price: 6900,
            dumb: true
        },
        {
            name: "Holodeck",
            image: "images/holodeck.jpg",
            price: 10000000000
        }
    ];

}])
