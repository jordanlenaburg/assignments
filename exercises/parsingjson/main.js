var xhr = new XMLHttpRequest();
var finalInfo = "";

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();

xhr.onreadystatechange = function parsePokemon() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data.objects[0].pokemon);
        for (var i = 0; i < data.objects[0].pokemon.length; i++) {
            finalInfo += "{<br>name: " + data.objects[0].pokemon[i].name + "<br>resource_uri: " + data.objects[0].pokemon[i].resource_uri + "<br>}<br>";
            document.getElementById("results").innerHTML = finalInfo;

        }
    }
}
