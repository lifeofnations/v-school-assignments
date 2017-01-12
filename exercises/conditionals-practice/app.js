function lesserPicker(numOne, numTwo) {
    if (numOne >= numTwo) {
        console.log(numTwo);
    } else {
        console.log(numOne);
    }
}

function monkeyTrouble(aSmile, bSmile) {
    if ((aSmile && bSmile) || (!aSmile && !bSmile)) {
        console.log("We are soooo in trouble!!!");
        return true;
    } else {
        console.log("Looks like we are just fine.");
        return false;
    }
}

function timeGreeting() {
    var date = new Date();
    var hour = date.getHours()
    if (hour < 12) {
        console.log("Good Morning!");
    } else if (hour > 17) {
        console.log("Good Evening!");
    } else {
        console.log("Good Afternoon");
    }
}

// testing the functions
console.log(lesserPicker(3, 2));
console.log(lesserPicker(34, 80));
console.log(monkeyTrouble(true, true));
console.log(monkeyTrouble(false, false));
console.log(monkeyTrouble(true, false));
console.log(timeGreeting());