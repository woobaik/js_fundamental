const reverseString = function(str) {
  let result = []
  let charArray = str.split("")
  for(let i = 0; i < str.length; i++) {
    let lastEle = charArray.pop()
    result.push(lastEle)
  }
  return result.join("")
}

module.exports = reverseString
