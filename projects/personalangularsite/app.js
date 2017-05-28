var app = angular.module("mainApp", ["ngRoute"])

app.controller("indexCtrl", ["$scope", "downloadBySearchService", "lyricsService", function ($scope, downloadBySearchService, lyricsService) {

    $scope.songId;
    $scope.downloadLink;
    $scope.downloadPhrase;
    $scope.trackInfo = {};
    $scope.trackObj;
    $scope.metaList;

    function setPhrase() {
        if ($scope.downloadLink === null) {
            return;
        } else {
            $scope.downloadPhrase = "Match found! Click here to download!"
        }
    }

    $scope.submitName = function (song, artist) {
        downloadBySearchService.getRequest(song + " " + artist)
            .then(
                function (data) {
                    $scope.songId = data.slice(-11);
                    //                    console.log(data);
                    $scope.downloadLink = data;
                    setPhrase();
                    return data;
                })
    }

    $scope.submitLyrics = function (song, artist) {
        $scope.submitName(song, artist);
        lyricsService.getTrackRequest(song, artist)
            .then(
                function (trackData) {
                    $scope.trackInfo = trackData[1];
                    $scope.metaList = trackData[2];
                    console.log(trackData[2])
                    lyricsService.getLyricRequest(trackData[0])
                        .then(
                            function (lyricData) {
                                $scope.trackObj = lyricData;
                                //                                console.log($scope.trackInfo);
                                //                                console.log($scope.trackObj);
                            })
                })
    }

}])

app.config(["$routeProvider", "$sceDelegateProvider", function ($routeProvider, $sceDelegateProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
        })
        .when("/lyrics", {
            templateUrl: "components/lyrics/lyrics.html",
        })
        .when("/meta", {
            templateUrl: "components/meta/meta.html",
        })
        .when("/video", {
            templateUrl: "components/video/video.html",
        })
        .otherwise({
            redirectTo: "/home"
        });

    $sceDelegateProvider
        .resourceUrlWhitelist([
        'self',
        // Allow loading for YouTube iFrame.
        'https://www.youtube.com/embed/**'
        ]);
}])
