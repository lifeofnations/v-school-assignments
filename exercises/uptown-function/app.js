var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

function stringMaker() {
    var stringLyrics = lyrics[0];
    for (var i = 1; i < lyrics.length; i++) {
        stringLyrics = stringLyrics + " " + lyrics[i];
    }
    return stringLyrics;
}

function stringReverser() {
    var reverseString = lyrics[lyrics.length - 1];
    for (var i = lyrics.length - 2; i >= 0; i--) {
        reverseString = reverseString + " " + lyrics[i];
    }
    return reverseString;
}

function everyOtherWord() {
    var everyOther = "";
    for (var i = 0; i < lyrics.length; i += 2) {
        everyOther = everyOther + " " + lyrics[i];
    }
    return everyOther;
}

function pairReverser(lyrics) {
    var reversePair = "";
    if (lyrics.length % 2 != 0) {
        for (var i = 1; i <= lyrics.length; i += 2) {
            if (i < lyrics.length) {
                reversePair +=  " " + lyrics[i] + " " + lyrics[i - 1];
            } else {
                reversePair += " " + lyrics[i - 1];
            }
        }
    } else {
        for (var i = 1; i <= lyrics.length; i += 2) {
            reversePair += " " + lyrics[i] + " " + lyrics[i - 1];
        }
    }
    return reversePair;
}




//console.log(stringMaker());
//console.log(stringReverser());
//console.log(everyOtherWord());
console.log(pairReverser(lyrics));