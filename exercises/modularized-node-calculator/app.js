var add = require("./add");
var subt = require("./subtract");
var mult = require("./multiply");
var divide = require("./division");
var Power = require("./exponent");

function allTheMaths(a, b, method) {
    var answer = 0
    switch (method) {
        case "add":
            answer = add(a, b);
            break;
        case "sub":
            answer = subt.subtract(a, b);
            break;
        case "mult":
            answer = mult.multiply(a, b);
            break;
        case "divide":
            answer = divide.answer;
            break;
        case "pow":
            var powerObject = new Power(a, b);
            answer = powerObject.answer;
            break;
        default:
            console.log("...sigh..")
            break;
    }
    return answer;
}


console.log(allTheMaths(3, 4, "add"));
console.log(allTheMaths(10, 3, "sub"));
console.log(allTheMaths(5, 5, "mult"));
console.log(allTheMaths("", "", "divide"));
console.log(allTheMaths(5, 3, "pow"));
