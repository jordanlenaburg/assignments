var app = angular.module("mainApp", []);

app.controller("mainCtrl", ["$scope", "yodaSpeech", function ($scope, yodaSpeech) {

    $scope.phraseThisIs = "";
    $scope.translatePhrase = function (originalSentence) {
        yodaSpeech.getRequest($scope.originalSentence).then(
            function (data) {
                $scope.phraseThisIs = data;
            },
            function (data) {
                console.log(data);
            }
        )
    }

}]);

app.service("yodaSpeech", ["$http", function ($http) {

    var url = "https://yoda.p.mashape.com/yoda?sentence=";
    var config = {
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };
    this.getRequest = function (str) {
        return $http.get(url + str, config).then(
            function (serverResponse) {
                return serverResponse.data;
            },
            function (serverResponse) {
                console.log(serverResponse.status);
            }
        )
    };
}])
