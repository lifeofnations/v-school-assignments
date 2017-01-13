function stringPrinter(stringToPrint) {
    for (var i = 0; i < stringToPrint.length; i++) {
        console.log(stringToPrint[i]);
    }
}

function letterFinder(string, letter) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            console.log("found " + letter + " at position " + (i + 1));
            break;
        } else if (i + 1 === string.length) {
            console.log("sorry " + letter + " not found")
        }
    }
}

function findNum42(find42) {
    for (var i = 0; i < find42.length; i++) {
        if (find42[i] === 42) {
            return "found 42 at index " + find42[i];
        }
    }
    return "sorry 42 not found";
}

function findLowestNumber(arrayOfTen) {
    var lowest = arrayOfTen[0];
    for (var i = 1; i < arrayOfTen.length; i++) {
        if (arrayOfTen[i] < lowest)
            lowest = arrayOfTen[i];
    }
    return lowest;
}

stringPrinter("Steve");
letterFinder("steve", "t");
letterFinder("steve", "x");
console.log(findNum42([34, 56, 23, 12, 42]));
console.log(findNum42([44, 222, 3421, 2331])); console.log(findLowestNumber([455, 234, 890, 22, 45, 56, 78, 21, 30, 90])); console.log("should be 21");