$.ajax({
    url: "http://pokeapi.co/api/v1/pokedex/1/",
    type: "GET",
    dataType: "json",
    success: function (JSON) {
        var finalInfo = ""
        var data = JSON;
        console.log(data.pokemon);
        for (var i = 0; i < data.pokemon.length; i++) {
            finalInfo += `Name:<a href='https://www.google.com/#q=` + data.pokemon[i].name + `' target="_blank"> ` + data.pokemon[i].name + `</a><br>`;
            $("#results").html(finalInfo);
        }
    }
})
