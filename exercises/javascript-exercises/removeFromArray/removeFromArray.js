const removeFromArray = function() {
  let arguArray = Array.from(arguments)

  for (let i = 1; i < arguArray.length; i++) {
    if (arguArray[0].includes(arguArray[i])) {
      arguArray[0].splice(arguArray[0].indexOf(arguArray[i]), 1)

    }
  }
  return arguArray[0]
}

module.exports = removeFromArray
