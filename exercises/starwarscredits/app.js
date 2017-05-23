var app = angular.module("mainApp", []);

app.controller("mainCtrl", ["$scope", "starWarsService", function ($scope, starWarsService) {

    $scope.filmTitle = "";
    $scope.filmEpisode = "";
    $scope.filmCrawl = [];

    $scope.displayCrawl = function (film) {
        starWarsService.getRequest(film).then(
            function (data) {
                if (data.episode_id === 1) {
                    $scope.filmEpisode = "Episode I";
                } else if (data.episode_id === 2) {
                    $scope.filmEpisode = "Episode II";
                } else if (data.episode_id === 3) {
                    $scope.filmEpisode = "Episode III";
                } else if (data.episode_id === 4) {
                    $scope.filmEpisode = "Episode IV";
                } else if (data.episode_id === 5) {
                    $scope.filmEpisode = "Episode V";
                } else if (data.episode_id === 6) {
                    $scope.filmEpisode = "Episode VI";
                } else if (data.episode_id === 7) {
                    $scope.filmEpisode = "Episode VII";
                }
                $scope.filmTitle = data.title;
                $scope.filmCrawl = data.opening_crawl.split("\r\n");
                $scope.filmCrawl.splice(0, 0, $scope.filmTitle);
                $scope.filmCrawl.splice(0, 0, $scope.filmEpisode);
                console.log($scope.filmCrawl)
            },
            function (data) {
                console.log(data);
            }
        )
    }


}])

app.service("starWarsService", ["$http", function ($http) {

    var url = "http://swapi.co/api/films/"

    this.getRequest = function (film) {
        return $http.get(url + film).then(
            function (serverResponse) {
                return serverResponse.data;
            },
            function (serverResponse) {
                console.log(serverResponse.status);
            }
        );
    };



}])
