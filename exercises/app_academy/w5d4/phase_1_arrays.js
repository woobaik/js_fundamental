// Array#uniq - returns a new array containing only the unique elements of the original array
// the unique elements should be in the order in which they first appear
// should not mutate the original array
// Array#twoSum - returns an array of position pairs where the elements sum to zero
// Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose
// should not mutate the original array

//
// Array.prototype.uniq = function() {
//   let result = []
//   for (let i = 0; i < this.length; i++) {
//     if (!(result.includes(this[i]))) {
//       result.push(this[i])
//     }
//   }
//   console.log(result)
// }
// //
// // let zico = [1,2,3,4,5,6,1,4,2,1,6,7]
// //
// // zico.uniq()
// // console.log(zico)
//
//
// Array.prototype.twoSum = function() {
//   let result = []
//   for (let i = 0; i < this.length - 1; i++) {
//     for (let j = 1; j < this.length; j ++) {
//       if (this[i] + this[j] === 0 ) {
//         result.push([i,j])
//       }
//     }
//   }
//   console.log(result)
// }
//
// let tryndamir = [1,2,3,4,5,6,-1,-4,0,-3,4,0 ];
// console.log(tryndamir.twoSum());

// Array.prototype.transpose = function() {
//   let new_arr = [];
//
//   for (let i = 0; i < this.length; i++) {
//     new_arr.push([])
//     for (let j = 0; j < this.length; j++) {
//       new_arr[j].push(this[i][j])
//     }
//   }
//   console.log(new_arr)
// }


array[0].map((col, i => array.map(row => row[i]))
