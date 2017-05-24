var app = angular.module("mainApp");

app.service("populationService", ["$http", function ($http) {

    var popData = {};
    var config = {
        headers: {
            'lang': 'en',
            'valuePresentation': 'Value',
            'timeOrder': 'Ascending'
        }
    };

    this.getRequest = function () {
        return $http.get("http://api.statbank.dk/v1/data/FOLK1D/JSONSTAT", config)
            .then(
                function (response) {
                    popData = response;
                    return popData;
                },
                function (response) {
                    alert("Error getting data");
                    console.log(response);
                })
    };
}]);
