document.getElementById("box").addEventListener("mouseenter", blue);
document.getElementById("box").addEventListener("mousedown", red);
document.getElementById("box").addEventListener("mouseup", yellow);
document.getElementById("box").addEventListener("dbclick", green);
document.getElementById("box").addEventListener("mouseout", gray);
document.body.addEventListener("wheel", orange);
document.body.addEventListener("keypress", keys);

function blue() {
    document.getElementById("box").style.backgroundColor = "blue";
}
function red() {
    document.getElementById("box").style.backgroundColor = "red";
}
function yellow() {
    document.getElementById("box").style.backgroundColor = "yellow";
}
function green() {
    document.getElementById("box").style.backgroundColor = "green";
}
function orange() {
    document.getElementById("box").style.backgroundColor = "orange";
}
function gray() {
    document.getElementById("box").style.backgroundColor = "lightgrey"
}
function keys(event) {
    var x = event.which;
    if (x === 98){
        document.getElementById("box").style.backgroundColor = "blue";
    } else if (x === 114){
        document.getElementById("box").style.backgroundColor = "red";
    } else if (x === 121){
        document.getElementById("box").style.backgroundColor = "yellow";
    } else if (x === 103) {
        document.getElementById("box").style.backgroundColor = "green";
    } else if (x === 111) {
        document.getElementById("box").style.backgroundColor = "orange";
    } else {
        document.getElementById("box").style.backgroundColor = "lightgrey";
    }
}