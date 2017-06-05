var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 8000;
app.use(bodyParser.json);


app.listen(8000, function(){
    console.log("The server is listening on port " + port)
})

var cities = [
    {
        name: "New York",
        state: "New York",
        country: "USA"
    },
    {
        name: "Salt Lake City",
        state: "Utah",
        country: "USA"
    },
    {
        name: "Copenhagen",
        country: "Denmark"
    },
]

app.get("/cities", function (req, res) {
    console.log("in the get")
    if (req.query.country === "USA") {
        console.log("in the if")
        var filteredCities = cities.filter(function (obj) {
            return obj.country === "USA"
        })
        return res.send(filteredCities);
    }
    return res.send(cities);
});