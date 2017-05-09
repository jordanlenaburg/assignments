var d = new Date();
var day = d.toDateString();
day = day.slice(0, 3);
console.log("Today is: " + day);
console.log("Current time is: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());