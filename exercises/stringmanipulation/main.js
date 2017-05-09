var ask = require('readline-sync');  
console.log('Hello! My name is Cassandra. Help me get to know you!\n');  
var firstName = ask.question('What is your first name?\n');  
console.log("\nHello " + firstName +", it's very nice to meet you.")
var age = ask.question(firstName + ", how old are you?\n");
if (age > 30) {
    console.log("Really? You don't look a day over 30! I just turned " + ((age * 1) + Math.floor(Math.random() * 100)) + "myself. As a computer though I think I'm aging well.")
} else {
    console.log("I remember way back when I was " + age +". I just turned " + ((age * 1) + Math.floor(Math.random ()* 100)) + " myself. As a computer though I think I'm aging well.");
};
var magic = ask.question("Tell me " + firstName + ", do you like magic tricks?\n");
if (magic === "yes") {
    console.log("Awesome! Let me show you some magic tricks I can do!");
} else {
    console.log("Oh ok then. Let me show you some things I can do with information you give me.")
}       
console.log("\nTo get started, let's get you to type in some information and I'll return it in all caps.\n");
var capper = ask.question("Please type something.\n");
if (capper.length < 1){
    console.log("It looks like you didn't type anything in! Please don't make that mistake again!\nLet's move on and I'll tell you how long a string is.")
} else {
console.log("\nAlright then, it looks like you typed '" + capper + "'. The all caps equivalent of this is: " + capper.toUpperCase() + "\nNext let's try reporting back how long a string is.\n")};
var strLength = ask.question("\nPlease type something.\n");
console.log("\nThanks for that. The string you entered is " + strLength.length + " characters long.\nNext let's add two strings together.");
var str1 = ask.question("Please enter the first string.\n");
var str2 = ask.question("Please enter the second string.\n");
console.log("\nGreat! Your two strings put together are: '" + str1.concat(str2) + "'.\nFor my last trick, I'll need you to type in a string of at least 20 characters and I'll return the last half of them.");
var str20 = ask.question("Please enter a string of at least 20 characters.\n");
if (str20.length < 20) {
    str20 = ask.question("Oops! It looks like your string wasn't 20 characters long! Please enter a string of at least 20 characters.\n");
};
if (str20.length < 20) {
    str20 += " ----I added this part to make your string more than 20 characters :)---";
    console.log("\nYou silly face! That STILL wasn't 20 characters long. It's ok though. I fixed your string for you. The new string is '" + str20 + "'\n");
};
console.log("\nThanks! The last half of your string is: \n\n" + str20.slice(str20.length / 2, str20.length) + "\n\n Isn't that impressive?\n\nNo? How about this. Tell me which index position to start at and I'll print your string from there.\n");
var i = ask.question("Where do you want me to start from?\n");
if (i > str20.length) {
    i = ask.question("Nice try! That number is bigger than all of the index positions in your string. Please give me a number which is less than the number of characters in your string\n");
};
if (i > str20.length) {
    i = Math.floor(Math.random() * str20.length);
    console.log("Since you aren't playing by the rules, I chose a random number for you. The random number is " + i + ".\n");
};
console.log("Your string starting at the index position of " + i + " is: " + str20.slice(i, str20.length) + "\n\nThat's it, that's all the tricks I know. Thanks for playing with me! BYE!");
