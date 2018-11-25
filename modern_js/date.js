let val;

const today = new Date();
let birthday = new Date('01-22-1987 11:25:00');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2)
birthday.setDate(20)
birthday.setFullYear(2001);

console.log(birthday)

console.log(typeof val);
