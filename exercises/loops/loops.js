function printIndividualLetters(input) {
    console.log("This input will be displayed in descending order: " + input);
    for (var i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
}
printIndividualLetters("Hello how are you");

function printFirstInstance(input, singleLetter) {
    console.log("This input will be searched for a single letter: " + input);
    for (var i = 0; i < input.length; i++) {
        if (input[i] === singleLetter) {
            console.log("You looked for the letter " + singleLetter + " which was found at index position " + i);
            return;
        }
    }
    console.log("You looked for the letter " + singleLetter + ". The specified letter was not found")
}
printFirstInstance("Hello how are you", "s")

function checkArray(nums) {
    console.log("You are checking this array for the answer to life, the universe, and everything: " + nums);
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 42) {
            console.log("The answer to life, the universe, and everything is: " + nums[i]);
            return;
        }
    }
    console.log("The answer to the life, the universe, and everything was not found")
}

checkArray([1, 2, 3, 42, 5, 6, 7]);

function smallestOfTen(tenNums) {
    console.log("You are looking for the smallest number in this array: " + tenNums)
    for (var i = 0; i < tenNums.length; i++) {
        var currentNum = tenNums[i];
        function checkNum(num) {
            return num >= currentNum;
        }
        if (tenNums.every(checkNum)) {
            console.log("The smallest number in this array is: " + currentNum);
            return;
        }
    }
}

smallestOfTen([98, 22, 59, 7, 35, 54, 90, 153, 27, 56])
