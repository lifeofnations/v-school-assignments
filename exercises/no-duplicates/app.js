var input = "hey how are you doing today"

//function dupeDeleter(inputString) {
//    var noDupes = "";
//    var removedDupes = "";
//    for (var i = 0; i < inputString.length; i++) {
//        noDupes += inputString[i];
//        for (var j = i + 1; j < inputString.length; j++) {
//            if (inputString[i] === inputString[j]) {
//                removedDupes += inputString.substr(j , 1);
//                inputString = inputString.slice(i);
//                console.log(inputString);
//                i--;
//            }
//        }
//        noDupes += inputString[i];
//        
//    }
//    console.log("ok " + noDupes);
//    console.log("removed " + removedDupes);
//}
//
//dupeDeleter(input);

function betterDeleter(inputString) {
    inputString = inputString.toLocaleLowerCase().replace(/ /g, "");
    var noDupes = "";
    var removedDupes = "";
    for (i = 0; i < inputString.length; i++) {
        if (noDupes.indexOf(inputString[i]) !== -1) {
            removedDupes += inputString[i];
        } else {
            noDupes += inputString[i];
        }
    }
    console.log("ok     :  " + noDupes);
    console.log("removed:  " + removedDupes);
}

betterDeleter(input);