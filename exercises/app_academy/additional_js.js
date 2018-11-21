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

//
// function Elephant(name, height, trick) {
//   this.name = name
//   this.height = height
//   this.trick = trick
// }
//
// Elephant.prototype.trumpet = function() {
//   console.log(`${this.name} the elephant goes 'phrRRRRRRRR!!!!!'`)
// }
//
// Elephant.prototype.grow = function() {
//   this.height += 12;
// }
//
// Elephant.prototype.addTrick = function(trick) {
//   this.trick.push(trick)
// }
//
// Elephant.prototype.play = function() {
//   let randomNumber = Math.floor(Math.random() * this.trick.length);
//   console.log(`${this.name} is ${this.trick[randomNumber]}`)
// }
//
// let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
// let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
// let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
// let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);
//
// let herd = [ellie, charlie, kate, micah];
//
// Elephant.herd = herd;
// Elephant.paradeHelper = function(elephant) {
//   console.log(`${elephant.name} is trtting by!`);
// }
//
// Elephant.herd.forEach((elep) => { Elephant.paradeHelper(elep)})
//




let dinerBreakfast = () => {
  let order = "I'd like cheesy scrambled eggs please"
  console.log(order)

  return function(food) {
    order = `${order.slice(0, order.length - 8 )} and ${food} please.`
    console.log(order);
  };
}
