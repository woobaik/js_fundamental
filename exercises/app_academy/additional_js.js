// let titleize = (arr, callback) => {
//   let titleized = arr.map((ele)=> `Mx. ${ele} Jungleheimer Schmidt`);
//   callback(titleized)
// }
//
// let printCallback = (names) => {
//   names.forEach(name => console.log(name))
// }
//
//
// titleize(["Mary", 'Brian', "IU", 'Leo'], printCallback)


function Elephant(name, height, trick) {
  this.name = name
  this.height = height
  this.trick = trick
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRR!!!!!'`)
}

Elephant.prototype.grow = function() {
  this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
  this.trick.push(trick)
}

Elephant.prototype.play = function() {
  let randomNumber = Math.floor(Math.random() * this.trick.length);
  console.log(`${this.name} is ${this.trick[randomNumber]}`)
}

let giant = new Elephant('Giant', 130, ['painting a picture', 'doing headbanging!'])

console.log(giant.height)
giant.grow()
console.log(giant.height)

console.log(giant.trick);
giant.addTrick('Singing a song');
console.log(giant.trick);

giant.play()
giant.play()
giant.play()
giant.play()
giant.play()
