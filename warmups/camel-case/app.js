function toCamelCase(string) {
    var stringArray = string.toLowerCase().split(/ |-|_/g);
    for (var i = 1; i < stringArray.length; i++) {
        var toUpper = stringArray[i].split("");
        toUpper[0] = toUpper[0].toUpperCase();
        stringArray[i] = toUpper.join("");
    }
    return stringArray.join("");
}

var test = "Hey hOw-are_YoU";

console.log(toCamelCase(test));