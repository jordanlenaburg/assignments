var app = angular.module("mainApp");

app.service("downloadBySearchService", ["$http", function ($http) {

    var url = "https://kashyap32-youtubetomp3-v1.p.mashape.com/"
    var config = {
        headers: {
            'X-Mashape-Key': "RTMrTFrRIXmshXlX53RclfYObvQ9p1HjDhtjsnCp7dU1GAne8o",
            'Accept': "text/plain"
        }
    }

    this.getRequest = function (songName) {
        return $http.get(url + songName, config)
            .then(
                function (response) {
                    // console.log(response.data.data[0].link);
                    return response.data.data[0].link;
                },
                function (response) {
                    alert("There was an error");
                    console.log(response.status);
                    console.log(response);
                    return response;
                }
            )
    }
}])
