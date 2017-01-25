function fixTeen(n) {
    if ((n >= 13 && n <= 14) || (n >= 17 && n <= 19)) {
        return 0;
    } else {
        return n;
    }
}

function noTeenSum(a, b, c, callback) {
    return callback(a) + callback(b) + callback(c);
}

console.log(noTeenSum(1, 2, 3, fixTeen))
console.log(noTeenSum(2, 13, 1, fixTeen))
console.log(noTeenSum(2, 1, 17, fixTeen))
console.log(noTeenSum(2, 15, 14, fixTeen))