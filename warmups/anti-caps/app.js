function isCaps(letter) {  
  return letter === letter.toUpperCase();
}

function antiCaps(input, check) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
        if (check(input[i])) {
            invert += input[i].toLowerCase();
        } else {
            invert += input[i].toUpperCase();
        }
    }
    return output;
}

var string = "HoW aRe YoU DoInG tOdaY?"

console.log(antiCaps(string, isCaps));