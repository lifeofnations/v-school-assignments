var added = document.getElementById("added");
var addButton = document.getElementById("add-button");
var add1 = document.getElementById("add-1");
var add2 = document.getElementById("add-2");
var subtracted = document.getElementById("subtracted");
var subtractButton = document.getElementById("subtract-button");
var subt1 = document.getElementById("subt-1");
var subt2 = document.getElementById("subt-2");
var multiplyed = document.getElementById("multiplyed");
var multiplyButton = document.getElementById("multiply-button");
var multiply1 = document.getElementById("multiply-1");
var multiply2 = document.getElementById("multiply-2");

function add() {
    added.textContent = Number(add1.value) + Number(add2.value);
}

function subt() {
    subtracted.textContent = Number(subt1.value) - Number(subt2.value);
}

function multiply () {
    multiplyed.textContent = Number(multiply1.value) * Number(multiply2.value);
}

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subt);
multiplyButton.addEventListener("click", multiply);