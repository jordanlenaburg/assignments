var app = angular.module("mainApp");

app.service("cartoonService", [function (cartoon) {

    this.inputArray = [];
    this.addCartoon = function (cartoon) {
        var cartoonDuplicate = cartoon;
        this.inputArray.push(cartoonDuplicate);
    }
}])
