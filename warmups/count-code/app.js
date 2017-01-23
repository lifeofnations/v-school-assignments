function countCode(string) {
    string = string.toLowerCase();
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "c" && string[i + 1] === "o" && string[i + 3] === "e") {
            count += 1;
        }
    }
    return count;
}

console.log(countCode("aaacodebbb"));
console.log(countCode("codexxcode"));
console.log(countCode("cozexxcope"));


//Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the "d", so "cope" and "cooe" would also count.
//
//countCode("aaacodebbb") -> 1 
//countCode("codexxcode") -> 2 
//countCode("cozexxcope") -> 2

function noLoop(string) {
    return string.match(/co.e/gi).length;
}

console.log(noLoop("aaacodebbb"));
console.log(noLoop("codexxcode"));
console.log(noLoop("cozexxcope"));