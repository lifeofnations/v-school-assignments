var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);

vegetables.pop();  
console.log("vegetables(pop): ", vegetables);

fruit.splice(0, 1);
console.log("fruit(splice): ", fruit);  

var orangeIndex = fruit.indexOf("orange");
fruit.push(orangeIndex);
console.log("fruit(oIndex): ", fruit);  

var vegiLength = vegetables.length;
vegetables.push(vegiLength);  
console.log("vegetables(length): ", vegetables);

var food = fruit.concat(vegetables);  
console.log("food(new): ", food);

food.splice(4, 2)
console.log("food(splice): ", food);

food.reverse();
console.log("food(reverse): ", food);

console.log(food.toString());

