function addsUp(int, arr) {
    arr = arr.sort((a, b) => b - a);
    var tries = 0;
    // if (arr.length = 0) return false;
    var sum = arr.reduce((total, num) => total + num);
    var difference = (sum - int);
    if (sum === int || arr.indexOf(difference) >= 0) return true;
    if (sum < int) return false;
    var toSub = 0;
    for (var i = 0; i < arr.length, tries <= arr.length * 2; i++) {
        if (arr[0] > difference) {
            arr.splice(0, 1);
            i--;
            tries++;
            continue;
        }
        if (difference - arr[i] - toSub >= 0) toSub += arr[i];
        if (toSub === difference) return true;
        if (i === arr.length - 1) {
            i = 0;
            tries++;
            arr.push(arr.splice(i, 1));
            toSub = 0;
        }
    }
    return false;
 }

console.log(addsUp(10, [5, 1, 5])); // true, because 5 + 5 === 10
console.log(addsUp(10, [2, 3, 1, 5])); // true, because 2 + 3 + 5 === 10
console.log(addsUp(10, [4, 2, 5]));
console.log(addsUp(10, [9, 1, 6, 7, 3]));
console.log(addsUp(9, [7, 2, 4, 3, 1]));
console.log(addsUp(11, [5, 8, 6, 2, 3]));
console.log(addsUp(13, [6, 7, 3, 4, 2]));
console.log(addsUp(8, [9, 1, 7, 5, 6]));
console.log(addsUp(15, [5, 1, 8, 7, 9]));
console.log(addsUp(1, [5, 8, 2, 4, 6]));
console.log(addsUp(13, [5, 6, 1, 3, 9]));
console.log(addsUp(12, [4, 8, 6, 7, 9]));
console.log(addsUp(10, [2, 8, 1, 9, 3]));