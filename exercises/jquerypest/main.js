var bobPrice = 0;
var goombaPrice = 0;
var cheepPrice = 0;
var totalTotal = 0;
var coinSound = new Audio("sounds/Mario-coin-sound.mp3")

$("#bob").on("keyup click", bob);

$("#nightVision").click(changeBackground);

function changeBackground() {
    var current = $("body").css("background-image");
    console.log(current)
    if (current === 'url("https://image.ibb.co/nwsZfk/main_background.jpg")') {
        $("body").css("background-image", 'url("https://image.ibb.co/b2AsY5/maxresdefault.jpg")')
    } else {
        $("body").css("background-image", 'url("https://image.ibb.co/nwsZfk/main_background.jpg")')
    }


}

function bob() {
    var bobTotal = $("#bob").val();
    bobPrice = (bobTotal * 7);
    $("#bobTotal").html(bobPrice);
    totalTotal = (bobPrice + goombaPrice + cheepPrice);
    $("#totalTotal").html(totalTotal);
    totalFade();
    coinSound.play();
    if (bobTotal > 0) {
        $("#bobPic").html('<img class="baddie" src="https://image.ibb.co/nxVa0k/Bobomb_NSMBU.png">');
        //        $("#bobText").css("opacity", 1);
        $("#bobText").fadeTo("slow", 1);
    } else {
        $("#bobPic").html('<img class="baddie" src="https://image.ibb.co/by4nVk/120px_SMB_Bob_omb.png">');
        //        $("#bobText").css("opacity", .8);
        $("#bobText").fadeTo("slow", .8);
    };
}

$("#goomba").on("keyup click", goomba);

function goomba() {
    var goombaTotal = $("#goomba").val();
    goombaPrice = (goombaTotal * 5);
    $("#goombaTotal").html(goombaPrice);
    totalTotal = (bobPrice + goombaPrice + cheepPrice);
    $("#totalTotal").html(totalTotal);
    totalFade();
    coinSound.play();
    if (goombaTotal > 0) {
        $("#goombaPic").html('<img class="baddie" src="https://image.ibb.co/gexcD5/Goomba_NSMB.png">');
        //        $("#goombaText").css("opacity", 1);
        $("#goombaText").fadeTo("slow", 1);
    } else {
        $("#goombaPic").html('<img class="baddie" src="https://image.ibb.co/eTPhwQ/draw_goomba_step_last_copy.png">');
        //        $("#goombaText").css("opacity", .8);
        $("#goombaText").fadeTo("slow", .8);
    };
}

$("#cheep").on("keyup click", cheep);

function cheep() {
    var cheepTotal = $("#cheep").val();
    cheepPrice = (cheepTotal * 11);
    $("#cheepTotal").html(cheepPrice);
    totalTotal = (bobPrice + goombaPrice + cheepPrice);
    $("#totalTotal").html(totalTotal);
    totalFade();
    coinSound.play();
    if (cheepTotal > 0) {
        $("#cheepPic").html('<img class="baddie" src="https://image.ibb.co/iEVxD5/200px_Cheep_Cheep_NSMBU.png">');
        //        $("#cheepText").css("opacity", 1);
        $("#cheepText").fadeTo("slow", 1);

    } else {
        $("#cheepPic").html('<img class="baddie" src="https://image.ibb.co/eF3EAk/180px_Cheep_Cheep_SMB.png">');
        //        $("#cheepText").css("opacity", .8);
        $("#cheepText").fadeTo("slow", .8);

    }
}

function totalFade() {
    if (totalTotal !== 0) {
        $("#bottomTotal").fadeTo("slow", 1);
    } else {
        $("#bottomTotal").fadeTo("slow", .8);
    }
}
