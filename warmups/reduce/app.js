/*
 * Given an array of integers, return the product (multiplication) of
 * all the numbers in the array
 * */
// numbers = [2, 4, 3];
//
// function findProduct(arr) {
//     var reduced = arr.reduce(function (prev, current) {
//         return prev * current
//     });
//     return reduced;
// }
//
// console.log(findProduct(numbers));

/*
 * Given an array of donor objects (name and donation amount), return the
 * total amount of donations
 * */
// var donors = [
//     {name: "a", donation: 10},
//     {name: "b", donation: 100},
//     {name: "c", donation: 4},
//     {name: "d", donation: 9000}
// ];
// function donationAmount(arr) {
//     var total = arr.reduce(function (prev, current) {
//         return prev + current.donation
//     }, 0);
//     return total
// }
//
// console.log(donationAmount(donors));

/*
 * Given an array of strings, return an object where the properties are one of the
 * strings, and the value is how many times that string appeared in the array
 *
 * E.g. var votes = ["angular", "react", "react"];
 *
 * countVotes(votes) => {angular: 1, react: 2}
 * */
// var votes = ["angular", "react", "react", "angular", "react", "ember", "vanilla", "angular", "react", "meteor", "angular"];
//
// function countVotes(arr) {
//     var counts = {};
//
//     var total = arr.reduce(function (prev, current) {
//         if (!prev[current]) {
//             prev[current] = 0;
//         }
//         prev[current]++;
//         return prev;
//     }, counts);
//     return total;
// }
//
// countVotes(votes);