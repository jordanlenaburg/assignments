var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

//var arrAlphabet = [];
//var arrNames = "";
//
//function looper() {
//    for (var i = 0; i < alphabet.length; i++) {
//        arrAlphabet.push(alphabet[i])
//    }
//
//    for (var i = 0; i < people.length; i++) {
//        //console.log(people[i] + ":," + arrAlphabet);
//        arrNames = arrNames + people[i] + ":," + arrAlphabet + ",";
//        //console.log(arrNames);
//    }
//    var arrFinal = arrNames.split(",");
//  //  console.log(arrFinal)
//}
//
//looper();

function looper() {
    var arrNew = [];
    for (var i = 0; i < people.length; i++) {
//        console.log(people[i]);       
        arrNew.push(people[i])
//        console.log(arrNew)
        for (var j = 0; j < alphabet.length; j++) {
//            console.log(alphabet[j]);
            arrNew.push(alphabet[j]);
        }        
    }
    console.log(arrNew);
}

looper()
