var goombaSmash = document.getElementById("goombas-smashed");
var goombaCost = document.getElementById("goomba-cost");
var bobOmbsSmash = document.getElementById("bob-ombs-smashed");
var bobOmbCost = document.getElementById("bob-omb-cost");
var cheepCheepSmash = document.getElementById("cheep-cheeps-smashed");
var cheepCheepCost = document.getElementById("cheep-cheep-cost");

function goombaTotal() {
    goombaCost.textContent = goombaSmash.value * 5;
}

function bobOmbTotal() {
    bobOmbCost.textContent = bobOmbsSmash.value * 7;
}

function cheepCheepTotal() {
    cheepCheepCost.textContent = cheepCheepSmash.value * 11;
}

goombaSmash.setAttribute("value", 12);
bobOmbsSmash.setAttribute("value", 8);
cheepCheepSmash.setAttribute("value", 5);

goombaSmash.addEventListener("change", goombaTotal);
bobOmbsSmash.addEventListener("change", bobOmbTotal);
cheepCheepSmash.addEventListener("change", cheepCheepTotal);