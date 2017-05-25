var app = angular.module("mainApp");

app.service("blueService", function () {

    this.score = 100;

    this.increment = function () {
        this.score++;
    };

    this.decrement = function () {
        this.score--;
    };

    this.reset = function () {
        this.score = 100;
    }

})
