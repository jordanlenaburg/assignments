angular.module("mainApp")
    .service("favService", ["$http", function ($http) {
        this.getFavList = function (config) {
            return $http.get("/favorites", config)
                .then(
                    function (response) {
                        console.log(response);
                        return response.data
                    },
                    function (response) {
                        console.log(response.status);
                        console.log(response)
                    }
                )
        };
        this.getOneFav = function (id) {
            return $http.get("/favorites/" + id)
                .then(
                    function (response) {
                        console.log(response);
                        return response.data
                    },
                    function (response) {
                        console.log(response.status);
                        console.log(response)
                    }
                )
        };
        this.postFav = function (artPiece) {
            return $http.post("/favorites", artPiece)
                .then(
                    function (response) {
                        alert("Posted to favorites!");
                        // console.log(response);
                        return response.data
                    },
                    function (response) {
                        console.log(response.status);
                        console.log(response)
                    }
                )
        };
        this.putFav = function (config) {
            return $http.put("/favorites/:id", config)
                .then(
                    function (response) {
                        console.log(response);
                        return response.data
                    },
                    function (response) {
                        console.log(response.status);
                        console.log(response)
                    }
                )
        };
        this.deleteFav = function (config) {
            return $http.delete("/favorites/id", config)
                .then(
                    function (response) {
                        console.log(response);
                        return response.data
                    },
                    function (response) {
                        console.log(response.status);
                        console.log(response)
                    }
                )
        }
    }]);