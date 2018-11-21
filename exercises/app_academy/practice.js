// function mysteryScoping1() {
//   var x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x)
// }
//
// mysteryScoping1()
// console.log('==================')
//
//
// function mysteryScoping2() {
//   const x = 'out of block';
//   if (true) {
//     const x = 'in block';
//     console.log(x)
//   }
//   console.log(x)
// }
//
// mysteryScoping2()
// console.log('==================')
//
//
// function mysteryScoping3() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
//
// mysteryScoping3()
// console.log('==================')
//
//
// function mysteryScoping4() {
//   const x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x)
// }
//
//
// // mysteryScoping4()
//
//
// function mysteryScoping5() {
//   let x = 'out of block';
//   let x = 'out of block again';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//
//   console.log(x);
// }
//
// mysteryScoping5()
//
//
// let madLib = (verb, adjective, noun) => {
//   console.log(`We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`)
// }
//
//
// madLib('make', 'best', 'taco')

//
// let isSubstring = (searchString, subString) => {
//     if (searchString.includes(subString)) {
//       console.log('true')
//     }
//     else {
//     console.log(false)
//     }
// }
// isSubstring("time to program", "time")
// isSubstring("Jump for joy", "joys")



// let fizzBuzz = (arr) => {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     if (( arr[i] % 3 === 0 || arr[i] % 5 === 0 ) && arr[i] % 15 !== 0 ) {
//       result.push(arr[i]);
//     }
//   }
//   console.log(result);
// }
//
//
// fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])


let isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false
      }
    }
  }
  return true;
}



let sumOfNPrimes = (num) => {
  let result = [];
  let sum = 0;
  let i = 1;
  if (num === 0) {
    console.log('0')
    return 0
  }
  while ( result.length < num) {
    if (isPrime(i)) {
      result.push(i)
      sum += i
    }
    i++
  }
  console.log(sum)
}


sumOfNPrimes(4)
