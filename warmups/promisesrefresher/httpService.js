var app = angular.module("mainApp");

app.service("httpService", ["$http", function ($http) {

    var url = "http://swapi.co/api/people/"

    this.getRequest = function (page) {
        var config = {
            params: {
                page: page
            }
        }
        return $http.get(url, config)
            .then(
                function (response) {
                    console.log(response.data.results);
                },
                function (response) {
                    console.log(response.status);
                    console.log(response);
                }
            )
    }
}])
