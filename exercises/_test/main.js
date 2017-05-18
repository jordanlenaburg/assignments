//var app = angular.module('myApp', []);
//
//app.controller('mainController', function ($scope) {
//
//    $scope.people = [
//        {
//            firstName: "Johnny",
//            lastName: "Matthews",
//    },
//        {
//            firstName: "Jimmy",
//            lastName: "Harold",
//    },
//        {
//            firstName: "Buster",
//            lastName: "Christopherson",
//    },
//
//                     ]
//
//    $scope.getFullName = function () {
//        return $scope.person.firstName + ' ' + $scope.person.lastName
//    }
//
//    $scope.getTitle = function (str) {
//        return $scope.newTitle = str
//    }
//
//});


//Minification - This is a best practice
//The only thing minification does is the computer "minifies" things into a format it can read, but nothing is necessary for us other than the actual syntax so the computer knows to, and can, minify it.

var app = angular.module('myApp', []);


//app.controller('mainController', ['$scope', '$http', function ($scope, $http) {
//
//    $http.get('http://pokeapi.co/api/v1/pokemon/1').then(function (response) {
//        console.log(response.data);
//
//    });
//    $http.post('http://some-api-url.com', dataToBePosted).then(function (response) {
//        //do stuff with response.data
//    }, function (response) {
//        //do stuff with error response.status
//    })
//}]);

app.controller('mainController', ['$scope', 'httpService', function ($scope, httpService) {
    $scope.pokemon;
    $scope.getPokemon = function () {
        httpService.getRequest('http://pokeapi.co/api/v1/pokemon/1').then(
            function (response) {
                console.log(response.data);
            },
            function (response) {
                //do stuff with error response.status
            }));

    $scope.info;
    $scope.postInfo = function ()
    httpService.getRequest('http://some-api-url.com', dataToBePosted).then(
        function (serviceResponse) {
            //do stuff with response.data
        },
        function (serviceResponse) {
            //do stuff with error response.status
        })
}]);


app.service('httpService', ['$http', function ($http) {

    this.getRequest = function (url) {
        return $http.get(url).then(
            function (serverResponse) {
                console.log(serverResponse.data);
            },
            function (serverResponse) {
                //do stuff with error response.status
            }));
    }
    this.postRequest = function (url) {
    return $http.post('http://some-api-url.com', dataToBePosted).then(
        function (serverResponse) {
            //do stuff with response.data
        },
        function (serverResponse) {
            //do stuff with error response.status
        })
    }
}])
