var haram = {
  name: 'haram',
  yearOfBirth: 1991,
  gender: 'Female'
}

var Person = function(name, yearOfBirth,gender) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.gender = gender;
}
// instanciation.
var haram = new Person('haram', 1991, 'Female');
