var goombaSmash = $("#goombas-smashed");
var goombaCost = $("#goomba-cost");
var bobOmbsSmash = $("#bob-ombs-smashed");
var bobOmbCost = $("#bob-omb-cost");
var cheepCheepSmash = $("#cheep-cheeps-smashed");
var cheepCheepCost = $("#cheep-cheep-cost");
var grandTotal = $("#grand-total");
var coinSound = $("#coin-sound");
var audio = new Audio('smb_coin.wav');
var isDay = true;

function goombaTotal() {
    goombaCost.text(goombaSmash.val() * 5);
    grandTotalCalculator();
}

function bobOmbTotal() {
    bobOmbCost.text(bobOmbsSmash.val() * 7);
    grandTotalCalculator();
}

function cheepCheepTotal() {
    cheepCheepCost.text(cheepCheepSmash.val() * 11);
    grandTotalCalculator();
}

function grandTotalCalculator() {
    grandTotal.text(Number(goombaCost.text()) + Number(bobOmbCost.text()) + Number(cheepCheepCost.text()));
    audio.play();
}

function nightMode() {
    if (isDay) {
        $("html").css("background-image", "none");
        $("html").css("background-color", "black");
        $("*").css("color", "lightgrey");
        $("header").css("background-color", "black");
        $("body").css("background-color", "grey");
        $("nav").css("background-color", "grey");
        $("nav h3").css("background-color", "black");
        $("input").css("background-color", "grey");
        $(".grand-bar").css("background-color", "black");
        $("img").css("filter", "grayscale(50%)");
        isDay = false;
    } else {
        $("html").css("background-image", "");
        $("html").css("background-color", "");
        $("*").css("color", "");
        $("header").css("background-color", "");
        $("body").css("background-color", "");
        $("nav").css("background-color", "");
        $("nav h3").css("background-color", "");
        $("input").css("background-color", "");
        $(".grand-bar").css("background-color", "");
        $("img").css("filter", "");
        isDay = true;
    }
}

goombaSmash.val(12);
bobOmbsSmash.val(8);
cheepCheepSmash.val(5);
goombaTotal();
bobOmbTotal();
cheepCheepTotal();

goombaSmash.change(goombaTotal);
bobOmbsSmash.change(bobOmbTotal);
cheepCheepSmash.change(cheepCheepTotal);
$("#night").click(nightMode);