/*
 * Given an array of integers, return an array containing the doubles
 * of each of the original integers.
 *
 * E.g. doubles([1, 2, 3, 4, 5])  => [2, 4, 6, 8, 10]
 * */

// var nums = [1, 2, 3, 4, 5];
// var doubles = nums.map(function (item) {
//     return item * 2
// });
// console.log(doubles);

/*
 * Given an array of squared numbers, return an array of the
 * square roots of those numbers
 *
 * E.g. roots([4, 9, 16, 25, 36]) => [2, 3, 4, 5, 6]
 * */

// var nums = [4, 9, 16, 25, 36];
// var sqRoot = nums.map(function (item) {
//     return Math.sqrt(item)
// } );

// var nums = [4, 9, 16, 25, 36];
// var sqRoot = nums.map(function (item) {
//         for (var i = 0; i < item; i++) {
//             if (i * i === item) {
//                 return i
//             }
//         }
//     }
// );
// console.log(sqRoot);

/*
 * Given an array of integers, return an array of doubled numbers of those
 * integers.
 *
 * E.g. seeingDouble([5, 7, 9, 11, 13]) => [55, 77, 99, 1111, 1313]
 * */

// arr = [5, 7, 9, 11, 13];
// function seeingDouble(arr) {
//     doubled = arr.map(function (item) {
//         return parseInt(item.toString() + item.toString())
//     });
//     console.log(doubled)
// }
// seeingDouble(arr);

/*
 * Given an array of integers, return an array on integers
 * containing the mirrored image of those integers
 *
 * E.g. mirrored([9, 13, 14, 42]) => [99, 1111, 1331, 1441, 4224]
 * */

function mirrored(arr) {
    var mirror = arr.map(function (item) {
        var str = item.toString();
        return (str + str.split("").reverse().join(""))
    });
    console.log(mirror);
}

mirrored([9, 13, 14, 42]);