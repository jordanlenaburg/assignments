var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

function first(lyrics) {
    var printOut = "";

    for (var i = 0; i < lyrics.length; i++) {
        var newLyric = lyrics[i];

        return printOut + " " + newLyric;
    }
    //console.log(printOut);

}
//console.log(first(lyrics));

function second(lyrics) {
    var reversed = lyrics.reverse();
    var printOut = "";

    for (var i = 0; i < reversed.length; i++) {
        var newLyric = reversed[i];

        printOut += " " + newLyric;
    }
    console.log(printOut);
}

//second(lyrics);

function third(lyrics) {
    var printOut = "";

    for (var i = 0; i < lyrics.length; i++) {
        var newLyric = lyrics[i];
        if (i % 2 === 0) {
            printOut += " " + newLyric;
        }
    }
    console.log(printOut);

}

//third(lyrics);

function fourth(lyrics) {
    var printOut = "";

    for (var i = 0; i < lyrics.length; i++) {
        var newLyric = lyrics[i];
        var reversedOrder = lyrics[i + 1];
        if (i % 2 === 0) {
            printOut += " " + reversedOrder + " " + newLyric;
        }
    }
    console.log(printOut);

}

fourth(lyrics);