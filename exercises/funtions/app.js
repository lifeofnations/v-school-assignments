var addFunction = function (num1, num2) {
    return num1 + num2;
}

function biggestNumber(num1, num2, num3) {
    var biggest = num1;
    if (biggest < num2) {
        biggest = num2;
        if (biggest < num3) {
            biggest = num3;
        }
    } else if (biggest < num3) {
        biggest = num3;
    }
    return biggest;
}

var evenOddChecker = function (num) {
    if (num % 2 === 0) {
        return "the number is even";
    } else {
        return "the number is odd";
    }
}

function doubleOrHalfString(string) {
    if (string.length <= 20) {
        return string.concat(string);
    } else {
        return string.slice(0, Math.floor(string.length / 2));
    }
}

function fibonacci(number) {
    var sum = 0;
    var fib = 0;
    var preFib = 0;
    var prePreFib = 0;
    for (var i = 0; i < number; i++) {
        fib = preFib + prePreFib;
        if (fib === 0) {
            preFib += 1;
        }
        prePreFib = preFib;
        preFib = fib;
        sum += fib;
        console.log(fib);
    }
    return sum;
}

function quadraticBS(a, b, c) {
    var solutions = [];
    if (a === 0) {
        return "FAIL: 'a' can't be 0";
    } else {
        var x1 = ((-b) + (Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);
        var x2 = ((-b) - (Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);
        if (x1 === NaN) {
            solutions.push("Imaginary");
        } else {
            solutions.push(x1);
        }
        if (x2 === NaN) {
            solutions.push("Imaginary");
        } else {
            solutions.push(x2);
        }
    }
    return solutions;
}

//var string = "lkasdjsflasdnfoaiessfaslkfdnaoiefhsaldfnakfsheossssssfa";
var string = "qwertyuIopasdfGhjklzxcvbnm";


function stringFrequency(string) {
    var string = string.toLowerCase().split("").sort().join("").trim();
    var frequencyNumber = 0;
    var mostFrequent = [];
    for (var i = 0; i < string.length; i++) {
        if (string.lastIndexOf(string[i]) - string.indexOf(string[i]) + 1 > frequencyNumber) {
            frequencyNumber = string.lastIndexOf(string[i]) - string.indexOf(string[i]) + 1;
            mostFrequent = [string[i]];
            i = string.lastIndexOf(string[i]);
        } else if (string.lastIndexOf(string[i]) - string.indexOf(string[i]) + 1 === frequencyNumber) {
            mostFrequent.push(string[i]);
            i = string.lastIndexOf(string[i]);
        } else {
            i = string.lastIndexOf(string[i]);
        }
    }
    mostFrequent.push(frequencyNumber);
    return mostFrequent;
}

console.log(stringFrequency(string));

//console.log(quadraticBS(5, 6, 1));
//console.log("sum: " + fibonacci(10));

//console.log(biggestNumber(3,3,5));