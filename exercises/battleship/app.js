var location = require("./location")

var grid = [];
var shipNum = 0;

while (shipNum < 3) {
    for (var i = 0; i < 10; i++) {
        var line = [];
        for (var j = 0; j < 10; j++) {
            line.push(new location);
            if (line[j].isShip === true) {
                shipNum++
            }
        };
        grid.push(line);
    };
};

for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (grid[i][j].isShip === true) {
            var shipSize = Math.floor(Math.random() * 5) + 1;
            var direction = Math.floor(Math.random() * 4) + 1;
            switch (direction) {
                case 1:
                    for (var k = 0; k < shipSize; k++) {
                        if (grid[i + k + 1]) {
                            grid[i + k + 1][j].isShip = false;
                            grid[i + k + 1][j].continuedShip = true;
                        }
                    };
                case 2:
                    for (var k = 0; k < shipSize; k++) {
                        if (grid[i - k - 1]) {
                            grid[i - k - 1][j].isShip = false;
                            grid[i - k - 1][j].continuedShip = true;
                        }
                    };
                case 3:
                    for (var k = 0; k < shipSize; k++) {
                        if (grid[i][j + k + 1]) {
                            grid[i][j + k + 1].isShip = false;
                            grid[i][j + k + 1].continuedShip = true;
                        }
                    };
                case 4:
                    for (var k = 0; k < shipSize; k++) {
                        if (grid[i][j - k - 1]) {
                            grid[i][j - k - 1].isShip = false;
                            grid[i][j - k - 1].continuedShip = true;
                        }
                    };
            }
        }
    };
};

var ask = require("readline-sync");

var turn = 0;

while (turn < 3) {
    console.log("There are " + shipNum + " ships left!")
    var coordinates = ask.question("Please enter the coordinates X,Y: ");
    var showGrid = [];
    var x = parseInt(coordinates.charAt(0));
    var y = parseInt(coordinates.charAt(2));

    if (grid[x][y].display !== ".") {
        console.log("You already guessed those coordinates!");
    } else if (grid[x][y].isShip === true) {
        console.log("You hit the enemy!");
        grid[x][y].hit = true;
        grid[x][y].display = "X";
        turn++;
        shipNum--;
    } else if (grid[x][y].continuedShip === true) {
        console.log("You hit the enemy!");
        grid[x][y].hit = true;
        grid[x][y].display = "X";
    } else {
        console.log("You missed the enemy!");
        grid[x][y].miss = true;
        grid[x][y].display = "M";
    }

    for (var i = 0; i < 10; i++) {
        var line = [];
        for (var j = 0; j < 10; j++) {
            line.push(grid[i][j].display);
        };
        showGrid.push(line);
    };
    console.log(showGrid)
};

console.log("You win!")
