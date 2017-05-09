document.getElementById("submit").addEventListener("click", submitForm);

function submitForm() {
//    var form = document.getElementById("passengerinfo");
//    var fname = form.elements["fname"].value;
//    var lname = form.elements["lname"].value;
//    var age = form.elements["age"].value;
//    var gender = form.elements["gender"].value;
//    var location = form.elements["location"].value;
//    var diet = [];
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var location = document.getElementById("location").value;
    var diet = [];



    if (document.getElementById("diet1").checked === true) {
        diet.push("vegan")
    }
    if (document.getElementById("diet2").checked === true) {
        diet.push("vegetarian")
    }
    if (document.getElementById("diet3").checked === true) {
        diet.push("carnetarian")
    }
    if (document.getElementById("diet4").checked === true) {
        diet.push("gluten free")
    }
    if (document.getElementById("diet5").checked === true) {
        diet.push("low carb")
    }
    if (document.getElementById("diet6").checked === true) {
        diet.push("sunlight")
    }

    alert("First Name: " + fname + "\nLast Name: " + lname + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + location + "\nDietary Restrictions: " + diet);
};
