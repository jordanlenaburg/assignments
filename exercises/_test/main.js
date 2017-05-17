var app = angular.module('myApp', []);

app.controller('mainController', function ($scope) {

    $scope.people = [
        {
            firstName: "Johnny",
            lastName: "Matthews",
    },
        {
            firstName: "Jimmy",
            lastName: "Harold",
    },
        {
            firstName: "Buster",
            lastName: "Christopherson",
    },

                     ]

    $scope.getFullName = function () {
        return $scope.person.firstName + ' ' + $scope.person.lastName
    }

    $scope.getTitle = function (str) {
        return $scope.newTitle = str
    }

});


//Minification
//The only thing minification does is the computer "minifies" things into a format it can read, but nothing is necessary for us other than the actual syntax so the computer knows to, and can, minify it.

var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', function ($scope) {


}]);
