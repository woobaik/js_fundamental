let titleize = (arr, callback) => {
  let titleized = arr.map((ele)=> `Mx. ${ele} Jungleheimer Schmidt`);
  callback(titleized)
}

let printCallback = (names) => {
  names.forEach(name => console.log(name))
}


titleize(["Mary", 'Brian', "IU", 'Leo'], printCallback)
