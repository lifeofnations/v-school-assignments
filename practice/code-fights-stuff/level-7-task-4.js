function stringsRearrangement(inputArray) {
    var tries = 0;
    for (var i = 0; i < inputArray.length - 1 && tries < inputArray.length * 2; i++) {
        var off = 0;
        console.log(i);
        for (var j = 0; j < inputArray[i].length; j++) {
            console.log(j);
            if (inputArray[i][j] !== inputArray[i + 1][j]) {
                off++;
            }
        }
        if (off !== 1) {
            var temp = inputArray.splice(i - 1, 1);
            inputArray.push(temp);
            i = 0;
            tries++;
        }
    }
    console.log(tries);
    return tries <= inputArray.length * 2;
}

var inputArray = ["aba", "bbb", "bab"];
console.log(stringsRearrangement(inputArray));


//s9sd 9ads ludivico