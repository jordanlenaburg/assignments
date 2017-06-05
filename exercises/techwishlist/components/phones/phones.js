var app = angular.module("mainApp");

app.controller("phonesCtrl", ["$scope", function ($scope) {

    $scope.techList = [
        {
            name: "XiaoMi Redme Note3",
            image: "images/xiaomi_redmi_note_3_dark_grey_small.jpg",
            price: 250
        },
        {
            name: "Gresso Luxor",
            image: "images/gresso-phone.jpg",
            price: 1000000
        }
    ]
}])
