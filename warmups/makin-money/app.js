function moneyFormat(number) {
    formated = [];
    number = number.toString().split("").reverse();
    while (number.length < 3) {
        number.push("0");
    }
    for (var i = 0; i <= number.length; i++) {
        if (i === number.length) {
            if (formated[0] === ",") {
                formated[0] = "$";
            } else {
                formated.unshift("$");
            }
            return formated.join("");
        } else if (i < 1) {
            formated.unshift(".", number[i + 1], number[i]);
            i++
        } else if (i === number.length - 3) {
            if (i === number.length - 1) {
                formated.unshift(number[i]);
            } else if (i === number.length - 2) {
                formated.unshift(number[i + 1], number[i]);
                i++;
            } else {
                formated.unshift(number[i + 2], number[i + 1], number[i]);
                i += 2;
            }
        } else {
            formated.unshift(",", number[i + 2], number[i + 1], number[i]);
        }
    }
}

var number = 92355715938;
var number2 = 20;
var number3 = 1;
var number4 = 34567;

console.log(moneyFormat(number));
console.log(moneyFormat(number2));
console.log(moneyFormat(number3));
console.log(moneyFormat(number4));


