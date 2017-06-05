var app = angular.module("mainApp")

app.controller("contactCtrl", ["$scope", function ($scope) {

    $scope.sendEmail = function (contact) {
        emailjs.send("gmail", "contactform", contact)
    }
}])
