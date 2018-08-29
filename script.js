// var haram = {
//   name: 'haram',
//   yearOfBirth: 1991,
//   gender: 'Female'
// }
//
// var Person = function(name, yearOfBirth,gender) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.gender = gender;
// }
// // instanciation.
// var haram = new Person('haram', 1991, 'Female');
//
// Person.prototype.calculateAge =
//   function() {
//     console.log(2018 - this.yearOfBirth);
//   }
//
// haram.calculateAge()
// Person.prototype.lastName = "Kim"


// Object.create
//
// var personProto = {
//   calculateAge: function() {
//     console.log(2018-this.yearOfBirth);
//   }
// };
//
// var peter = Object.create(personProto,
//  {name: {value : "peter"},
//  yearOfBirth: {value: 1982},
//  gender: {value: "male"}}
// )
//

//Passing functions as arguments.

var years = [1990, 2310, 2212, 1321, 1442];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el){
  return 2016 - el
}
arrayCalc(years, calculateAge);
