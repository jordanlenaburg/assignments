/*
 * Given an array of integers, return an array that
 * only includes the odds from the original array.
 * You must use Array.prototype.filter
 *
 * E.g. odds([1, 2, 3, 4, 5])  => [1, 3, 5]
 * */

// function odds(nums) {
//     var odd = nums.filter(function (item) {
//         return item % 2 !== 0;
//     })
//     return odd
// };
//
// console.log(odds([1, 2, 3, 4, 5]));

/*
 * An array is considered "lengthy" if it has more than or equal to 5 items.
 * Given an array of arrays, return a new array of only the short arrays
 * from the original array of arrays.
 *
 * E.g.
 var stuff = [
 [1, 42, true, "fizz"],
 [2, 41, false, "buzz", {}],
 [false],
 [10, 11, 12, 13, 14]
 ];

 result: [
 [2, 41, false, "buzz", {}],
 [10, 11, 12, 13, 14]
 ];
 * */

function shorts(arr) {
    var result = arr.filter(function (singleArray) {
        return singleArray.length < 5
    });
    console.log(result)
}
var stuff = [
    [1, 42, true, "fizz"],
    [2, 41, false, "buzz", {}],
    [false],
    [10, 11, 12, 13, 14]
];
shorts(stuff);