var app = angular.module("mainApp");

app.service("lyricsService", ["$http", function ($http) {

    let self = this;

    var trackUrl = "https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/track.search?";
    var trackConfig = {
        params: {
            f_has_lyrics: 1,
            page: 1,
            page_size: 10,
        },
        headers: {
            'X-Mashape-Key': 'RTMrTFrRIXmshXlX53RclfYObvQ9p1HjDhtjsnCp7dU1GAne8o',
            'Accept': 'application/json'
        }
    }

    var trackId;
    var metaList;

    this.getTrackRequest = function (lyricsSong, lyricsArtist) {
        trackConfig.params.q_artist = lyricsArtist;
        trackConfig.params.q_track = lyricsSong;
        trackConfig.params.q_track_artist = lyricsSong + " " + lyricsArtist;
        return $http.get(trackUrl, trackConfig)
            .then(
                function (response) {
                    trackId = response.data[0].track_id;
                    metaList = response.data;
                    return [trackId, response.data[0], metaList];
                },
                function (response) {
                    console.log(response.status);
                    console.log(response)
                }
            )
    }

    var lyricsUrl = "https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/track.lyrics.get";

    this.getLyricRequest = function (trackId) {
        var lyricsConfig = {
            params: {
                track_id: trackId
            },
            headers: {
                'X-Mashape-Key': 'RTMrTFrRIXmshXlX53RclfYObvQ9p1HjDhtjsnCp7dU1GAne8o',
                'Accept': 'application/json'
            }
        }
        return $http.get(lyricsUrl, lyricsConfig)
            .then(
                function (response) {
                    return response.data;
                },
                function (response) {
                    console.log(response.status);
                    console.log(response);
                }
            )
    }
}])
