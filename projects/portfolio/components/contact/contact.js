var app = angular.module("mainApp")

app.controller("contactCtrl", ["$scope", function ($scope) {

    $scope.sendEmail = function (contact) {
        var sendContact = JSON.stringify(contact);
        emailjs.send("gmail", "contactform", sendContact)
        //pass info via email to me
    }
}])
