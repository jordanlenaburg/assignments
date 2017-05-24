var app = angular.module("mainApp");

app.service("countryInfoService", ["$http", function ($http) {

    var url = "https://en.wikipedia.org/w/api.php"
    var config = {
        params: {
            titles: 'denmark',
            prop: 'revisions',
            rvprop: 'content',
            format: 'json',
            callback: 'JSON_CALLBACK',
            action: "query"
        }
    };

    this.getRequest = function () {
        return $http.jsonp(url, config)
            .then(
                function (response) {
                    console.log(response.data);
                    return response;
                },
                function (response) {
                    alert("Error getting data");
                    console.log(response);
                })
    };
}]);
