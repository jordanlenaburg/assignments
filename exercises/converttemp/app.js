var app = angular.module("mainApp", []);

app.controller("mainCtrl", ["$scope", "weatherService", function ($scope, weatherService) {

    $scope.temps = [10, 15, 20, 25, 30];

    $scope.currentWeather = {};

    $scope.getWeather = function (lat, lon) {
        $scope.coordinates = lat + "," + lon;
        weatherService.getRequest($scope.coordinates)
            .then(
                function (response) {
                    $scope.currentWeather = response;
                }
            )
    };

    $scope.displays = ['Fahrenheit', 'Celsius', 'Kelvin'];
    $scope.display = $scope.displays[0];
}]);



app.filter("temperature", function () {

    return function (temp, type) {
        switch (type) {
            case "F":
            case "Fahrenheit":
                temp += "°F"
                return temp;
            case "C":
            case "Celsius":
                temp = (parseInt(temp) - 32) * .5556;
                temp += "°C";
                return temp;
            case "K":
            case "Kelvin":
                temp = ((parseInt(temp) - 32) * .5556) + 273.15;
                temp += "°K";
                return temp;
        };


        //
        //        if (type === "F") {
        //            temp += "°F"
        //            return temp
        //        } else if (type === "C") {
        //            temp += "°C"
        //            return temp
        //        } else if (type === "K") {
        //            temp += "°K"
        //        } else if (type === "Fahrenheit") {
        //            temp += "°F"
        //            return temp
        //        } else if (type === "Celsius") {
        //            temp += "°C"
        //            return temp
        //        } else if (type === "Kelvin") {
        //            temp += "°K"
        //            return temp
        //        }

    }
})

app.config(['$sceDelegateProvider', function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow JSONP calls that match this pattern
        'https://api.darksky.net/forecast/4a37cda9032be5c0c9e6dfb11754b884/**'
  ]);
}]);


app.service("weatherService", ["$http", function ($http) {

    var url = "https://api.darksky.net/forecast/4a37cda9032be5c0c9e6dfb11754b884/";

    var config = {
        params: {
            jsonpCallbackParam: "callback"
        }
    }

    this.getRequest = function (coordinates) {
        return $http.jsonp(url + coordinates, config)
            .then(
                function (response) {
                    console.log(response.data.currently);
                    return response.data.currently;
                },
                function (response) {
                    console.log(response.status);
                    console.log(response);
                }
            )
    };
}]);
