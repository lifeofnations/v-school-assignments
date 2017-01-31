function firstNoRepeat(string) {
    string = string.toLowerCase();
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== string[i - 1] && string[i] !== string[i + 1])
            return string[i];
    }
    return "ALL REPEATS!!!!!!!!"
}

var string = "gggggggxkljfvlsjkfg";

console.log(firstNoRepeat(string));