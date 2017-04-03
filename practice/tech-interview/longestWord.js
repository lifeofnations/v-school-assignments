function longestWord(string) {
    return string.split(" ").sort((a, b) => b.length - a.length)[0].length;
}

var string = "quick brown fox jumped over the lazy dog";

console.log(longestWord(string));