const ftoc = function(fahren) {
  let result;
  result = (fahren - 32) * 5/9;
  return Math.round( result * 10 ) / 10;
}

const ctof = function(celci) {
  let result;
  result = celci * 9/5 + 32
  return Math.round(result * 10 ) / 10
}

module.exports = {
  ftoc,
  ctof
}
