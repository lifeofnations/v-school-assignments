Array.prototype.myFilter = function (callback) {
    var array = this;
    var output = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            output.push(array[i]);
        }
    }
    return output;
};


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var newArray = array.myFilter((thing) => thing < 5);

console.log(array);
console.log(newArray);
