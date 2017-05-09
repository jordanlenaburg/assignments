var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  

vegetables.pop();

fruit.splice(0, 1);

var orangePosition = fruit.indexOf("orange");
fruit.push(orangePosition);
  

var vegLength = vegetables.length;
vegetables.push(vegLength);
 
var food = fruit.concat(vegetables);

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  
console.log("food: ", food);

food.splice(4, 2);

food.reverse();

var foodStr = food.toString();

console.log(foodStr);
