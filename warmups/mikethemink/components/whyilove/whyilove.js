var app = angular.module("mainApp");

app.controller("whyiloveCtrl", ["$scope", function ($scope) {

    $scope.hide = function () {
        document.getElementById("mike").style = "display:none";
    }

    $scope.thingsILike = {
        bicycles: 'https://cdn.shopify.com/s/files/1/0232/3305/products/state_bicycle_fixie_fixed_gear_ashton_4_large.jpg?v=1473721341',
        pedestrians: 'https://slowstreets.files.wordpress.com/2015/07/newbury-northbrook-st-pedestrian-street.jpg',
        standardOfLiving: 'https://object.cato.org/images/homepage/200910_blog_mitchell2.jpg',
        socialMobility: 'http://www.peopleforbikes.org/page/-/uploads/GLP/income%20mobility.PNG',
        architecture: 'http://www.telegraph.co.uk/content/dam/Travel/leadAssets/26/67/denmark_2667866a-large.jpg',
        happiness: 'http://media2.s-nbcnews.com/i/MSNBC/Components/Video/__NEW/tdy_mor_happy_130910.jpg'
    }

}])
