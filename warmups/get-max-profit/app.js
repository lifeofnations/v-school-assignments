
function getMaxProfit(input) {
    var max = 0;
    for (var i = 0; i < input.length; i++) {
        for (var j = i + 1; j < input.length; j++) {
            var check = input[j] - input[i];
            if (check > max) {
                max = check;
            }
        }
    }
    return max;
}


var yesterday = [10, 7, 5, 8, 11, 9];
var a = [5, 10, 6, 15, 3, 4, 14, 7, 12, 8];
var b = [5, 14, 15, 13, 9, 3, 7, 8, 6, 11];
var c = [5, 12, 7, 10, 6, 14, 8, 9, 13, 4];
var d = [5, 14, 15, 13, 7, 4, 11, 10, 3, 8];
var e = [6, 8, 9, 5, 13, 10, 3, 7, 14, 11];
var f = [4, 6, 8, 12, 9, 10, 3, 11, 14, 5];
var g = [8, 15, 6, 4, 9, 12, 11, 7, 14, 5];
var h = [3, 8, 9, 15, 13, 14, 5, 4, 6, 7];
var i = [8, 15, 14, 6, 7, 5, 12, 4, 9, 10];
var j = [11, 8, 9, 12, 4, 15, 3, 13, 5, 10];

console.log(getMaxProfit(yesterday));
console.log(getMaxProfit(a));
console.log(getMaxProfit(b));
console.log(getMaxProfit(c));
console.log(getMaxProfit(d));
console.log(getMaxProfit(e));
console.log(getMaxProfit(f));
console.log(getMaxProfit(g));
console.log(getMaxProfit(h));
console.log(getMaxProfit(i));
console.log(getMaxProfit(j));














//
// Suppose we could access yesterday's stock prices as a list, where:
//
// The values are the price in dollars of Apple stock.
//     A higher index indicates a later time.
//     So if the stock cost $500 at 10:30am and $550 at 11:00am, then:
//
// stock_prices_yesterday[60] = 500
//
// Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
//
//     For example:
//
//     stock_prices_yesterday = [10, 7, 5, 8, 11, 9]
//
// get_max_profit(stock_prices_yesterday)
// # returns 6 (buying for $5 and selling for $11)
//
//     No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).