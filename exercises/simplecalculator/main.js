document.getElementById("addSubmit").addEventListener("click", add);

function add() {
    var str1 = document.getElementById("add1").value * 1;
    var str2 = document.getElementById("add2").value * 1;
    document.getElementById("addAnswer").innerHTML = (str1 + str2);
    document.getElementById("addAnswer").style.color = "crimson";
};

document.getElementById("subSubmit").addEventListener("click", sub);

function sub() {
    var str1 = document.getElementById("sub1").value * 1;
    var str2 = document.getElementById("sub2").value * 1;
    document.getElementById("subAnswer").innerHTML = (str1 - str2);
    document.getElementById("subAnswer").style.color = "crimson";
};

document.getElementById("mulSubmit").addEventListener("click", mul);

function mul() {
    var str1 = document.getElementById("mul1").value * 1;
    var str2 = document.getElementById("mul2").value * 1;
    document.getElementById("mulAnswer").innerHTML = (str1 * str2);
    document.getElementById("mulAnswer").style.color = "crimson";
};

document.getElementById("add1").addEventListener("keyup", styler);
document.getElementById("add2").addEventListener("keyup", styler);
document.getElementById("sub1").addEventListener("keyup", styler);
document.getElementById("sub2").addEventListener("keyup", styler);
document.getElementById("mul1").addEventListener("keyup", styler);
document.getElementById("mul2").addEventListener("keyup", styler);
document.getElementById("reset").addEventListener("click", resetter);

function resetter() {
    document.getElementById("add1").style.backgroundColor = "lightgrey";
    document.getElementById("add2").style.backgroundColor = "lightgrey";
    document.getElementById("sub1").style.backgroundColor = "lightgrey";
    document.getElementById("sub2").style.backgroundColor = "lightgrey";
    document.getElementById("mul1").style.backgroundColor = "lightgrey";
    document.getElementById("mul2").style.backgroundColor = "lightgrey";
    document.getElementById("addAnswer").innerHTML = "";
    document.getElementById("subAnswer").innerHTML = "";
    document.getElementById("mulAnswer").innerHTML = "";
}

function styler() {
    if (document.getElementById("add1").value.length > 0) {
        document.getElementById("add1").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("add1").style.backgroundColor = "lightgrey";
    }
    if (document.getElementById("add2").value.length > 0) {
        document.getElementById("add2").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("add2").style.backgroundColor = "lightgrey";
    }
    if (document.getElementById("sub1").value.length > 0) {
        document.getElementById("sub1").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("sub1").style.backgroundColor = "lightgrey";
    }
    if (document.getElementById("sub2").value.length > 0) {
        document.getElementById("sub2").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("sub2").style.backgroundColor = "lightgrey";
    }
    if (document.getElementById("mul1").value.length > 0) {
        document.getElementById("mul1").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("mul1").style.backgroundColor = "lightgrey";
    }
    if (document.getElementById("mul2").value.length > 0) {
        document.getElementById("mul2").style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("mul2").style.backgroundColor = "lightgrey";
    }
}
