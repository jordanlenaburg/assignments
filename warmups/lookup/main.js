var ask = require("readline-sync");

function WordObject(word, definition) {
    this.word = ask.question("Please enter the word\n\t");
    this.definition = ask.question("Please enter the definition\n\t");
};

var dictionary = [];

function intoDictionary() {
    var newWord = new WordObject();
    for (var i = 0; i < dictionary.length; i++) {
        if (newWord.word === dictionary[i]) {
            console.log("This word is already in the dictionary");
            console.log(dictionary[i]);
            return;
        } else {
            dictionary.push(newWord);
        }
    }
}

intoDictionary()
intoDictionary()
intoDictionary()

console.log(dictionary)
