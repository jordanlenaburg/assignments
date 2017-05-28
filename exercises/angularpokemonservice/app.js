var app = angular.module("mainApp", []);

app.controller("mainCtrl", ["$scope", "httpService", "pokeService", function ($scope, httpService, pokeService) {

    httpService.populateMasterList();

    $scope.favList = pokeService.favList;

    $scope.add = function (pokeName) {
        pokeService.addPokemon(pokeName);
    }

    $scope.delete = function (pokeName) {
        pokeService.removePokemon(pokeName);
    }


}]);

app.service("httpService", ["$http", function ($http) {

    this.populateMasterList = function () {
        return $http.get("http://pokeapi.co/api/v1/pokedex/1/")
            .then(
                function (response) {
                    return response.data.pokemon;
                },
                function (response) {
                    console.log(response.status);
                    console.log(response);
                }
            )
    }
}]);

app.service("pokeService", ["httpService", function (httpService) {

    let self = this;
    
    this.masterList

    var checkMasterList = function (name, response) {
        var lowerCase = name.toLowerCase();
        for (var i = 0; i < response.length; i++) {
            if (response[i].name === lowerCase) {
                return true;
                // check if pokemon name is valid according to httpservice result
            }
        }
        alert("This isn't a valid pokemon. Please check your spelling")
        return false;
        // alert if pokemon isn't valid
    };

    this.favList = [];

    var checkFavList = function (name) {
        var lowerCase = name.toLowerCase();
        
        console.log(self.favList);
        if (self.favList.indexOf(lowerCase) === -1) {
            return true;
            // check to see if pokemon is on list of fav pokemon already
        }
        alert("This pokemon is already on your fav list!");
        return false;
        // alert if pokemon is on the list already
    };



    this.addPokemon = function (name) {
        httpService.populateMasterList()
            .then(
                function (response) {
                    console.log(response);
                    if (checkMasterList(name, response) && checkFavList(name)) {
                        self.favList.push(name);
                        // add pokemon from input to list of fav
                    }
                })
    }

    this.removePokemon = function (name) {
        var lowerCase = name.toLowerCase();
        // check if name is on list
        var spliceIndex = self.favList.indexOf(lowerCase);
        // if name is not on list, alert
        if (spliceIndex === -1) {
            alert("This name isn't on the list! Please check your spelling")
            return;
        } else {
        // splice favlist at indexof lowercase
            self.favList.splice(spliceIndex, 1)
        }
    }
}])
