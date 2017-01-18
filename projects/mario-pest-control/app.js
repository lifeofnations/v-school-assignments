var goombaSmash = document.getElementById("goombas-smashed");
var goombaCost = document.getElementById("goomba-cost");
var bobOmbsSmash = document.getElementById("bob-ombs-smashed");
var bobOmbCost = document.getElementById("bob-omb-cost");
var cheepCheepSmash = document.getElementById("cheep-cheeps-smashed");
var cheepCheepCost = document.getElementById("cheep-cheep-cost");
var grandTotal = document.getElementById("grand-total");

function goombaTotal() {
    goombaCost.textContent = goombaSmash.value * 5;
    grandTotalCalculator();
}

function bobOmbTotal() {
    bobOmbCost.textContent = bobOmbsSmash.value * 7;
    grandTotalCalculator();
}

function cheepCheepTotal() {
    cheepCheepCost.textContent = cheepCheepSmash.value * 11;
    grandTotalCalculator();
}

function grandTotalCalculator() {
    grandTotal.textContent = Number(goombaCost.textContent) + Number(bobOmbCost.textContent) + Number(cheepCheepCost.textContent);
}

goombaSmash.setAttribute("value", 12);
bobOmbsSmash.setAttribute("value", 8);
cheepCheepSmash.setAttribute("value", 5);
goombaTotal();
bobOmbTotal();
cheepCheepTotal();

goombaSmash.addEventListener("change", goombaTotal);
bobOmbsSmash.addEventListener("change", bobOmbTotal);
cheepCheepSmash.addEventListener("change", cheepCheepTotal);