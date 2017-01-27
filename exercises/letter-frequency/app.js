function letterFrequency(string, printer, sorter) {
    printer(string.toLowerCase());
    var string = string.toLowerCase().split("").sort().join("");
    var frequencyNumber = 0;
    var frequencyArray = ["placeholder", 0];
    var finalOutput = {};
    for (var i = 0; i < string.length; i++) {
        frequencyNumber = string.lastIndexOf(string[i]) - string.indexOf(string[i]) + 1;
        var currentLetter = string[i];
        frequencyArray.splice(sorter(frequencyNumber, frequencyArray), 0, currentLetter, frequencyNumber);
        i = string.lastIndexOf(string[i]);
    }
    frequencyArray.splice(frequencyArray.length - 2);
    return combiner(frequencyArray, finalOutput);
}

function stringNoDupes(string) {
    var noDupeString = "";
    for (var i = 0; i < string.length; i++) {
        if (noDupeString.indexOf(string[i]) < 0) {
            noDupeString += string[i];
        }
    }
    console.log(noDupeString);
}

function sorter(number, array) {
    for (var j = 1; j < array.length; j += 2) {
        if (number >= array[j]) {
            return j - 1;
        }
    }
}

function combiner(array, output) {
    for (var k = 0; k < array.length; k += 2) {
        output[array[k]] = array[k + 1];
    }
    return output;
}


var string = "slimy smelly solution";
console.log(letterFrequency(string, stringNoDupes, sorter));