var bobPrice = 0;
var goombaPrice = 0;
var cheepPrice = 0;

document.getElementById("bob").addEventListener("keyup", bob);
document.getElementById("bob").addEventListener("click", bob);

function bob() {
    var bobTotal = document.getElementById("bob").value;
    bobPrice = (bobTotal * 7);
    document.getElementById("bobTotal").innerHTML = bobPrice;
    var totalTotal = (bobPrice + goombaPrice + cheepPrice);
    document.getElementById("totalTotal").innerHTML = totalTotal;
    if (bobTotal > 0) {
        document.getElementById("bobPic").innerHTML = '<img class="baddie" src="https://image.ibb.co/nxVa0k/Bobomb_NSMBU.png">';
        document.getElementById("bobText").style.opacity = 1;
    } else {
        document.getElementById("bobPic").innerHTML = '<img class="baddie" src="https://image.ibb.co/by4nVk/120px_SMB_Bob_omb.png">';
        document.getElementById("bobText").style.opacity = .8;
    };
}

document.getElementById("goomba").addEventListener("keyup", goomba);
document.getElementById("goomba").addEventListener("click", goomba);

function goomba() {
    var goombaTotal = document.getElementById("goomba").value;
    goombaPrice = (goombaTotal * 5);
    document.getElementById("goombaTotal").innerHTML = goombaPrice;
    var totalTotal = (bobPrice + goombaPrice + cheepPrice);
    document.getElementById("totalTotal").innerHTML = totalTotal;
    if (goombaTotal > 0) {
        document.getElementById("goombaPic").innerHTML = '<img class="baddie" src="https://image.ibb.co/gexcD5/Goomba_NSMB.png">';
        document.getElementById("goombaText").style.opacity = 1;
    } else {
        document.getElementById("goombaPic").innerHTML = '<img class="baddie" src="https://image.ibb.co/eTPhwQ/draw_goomba_step_last_copy.png">';
        document.getElementById("goombaText").style.opacity = .8;
    };
}

document.getElementById("cheep").addEventListener("keyup", cheep);
document.getElementById("cheep").addEventListener("click", cheep);

function cheep() {
    var cheepTotal = document.getElementById("cheep").value;
    cheepPrice = (cheepTotal * 11);
    document.getElementById("cheepTotal").innerHTML = cheepPrice;
    var totalTotal = (bobPrice + goombaPrice + cheepPrice);
    document.getElementById("totalTotal").innerHTML = totalTotal;
    if (cheepTotal > 0) {
        document.getElementById("cheepPic").innerHTML = '<img class="baddie" src="https://image.ibb.co/iEVxD5/200px_Cheep_Cheep_NSMBU.png">';
        document.getElementById("cheepText").style.opacity = 1;

    } else {
        document.getElementById("cheepPic").innerHTML = '<img class="baddie" src="https://image.ibb.co/eF3EAk/180px_Cheep_Cheep_SMB.png">';
        document.getElementById("cheepText").style.opacity = .8;

    }
}
