const repeatString = function(str, num) {

  let result = ""
  if ( num < 0 ) {
    return "ERROR"
  }
  for (let i = 0; i < num; i++) {
    result = result.concat(str);
  }
  return result
}

module.exports = repeatString
