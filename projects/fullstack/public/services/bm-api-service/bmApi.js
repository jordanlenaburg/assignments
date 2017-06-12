// Connect Module
// Connect BM API through $http
angular.module("mainApp")
    .service("bmService", ["$http", function ($http) {
        let self = this;
        // self.test = function () {
        //     console.log("testing")
        // };
        self.getList = function (config) {
            // config.headers = {
            //     Authorization: "YzAyY2QwYWY1MTJiMDNhMzFhZGZkOTYyNzRkNzQwZjE6"
            // };
            return $http.get("https://api.burningman.org/api/v1/art", config)
                .then(function (response) {
                        console.log(response);
                        return response
                    },
                    function (response) {
                        console.log(response.data);
                        console.log(response)
                    })
        }
    }]);