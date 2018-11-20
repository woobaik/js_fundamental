function binarySearch(arr, target) {

  var low = 0
  var high = arr.length - 1
  while (arr[low] <= arr[high]) {
    var mid = Math.floor((low + high)/2)
    if (arr[mid] === target) {
      console.log(mid)
      return mid
    }
    else if (arr[mid] > target) {
      high = mid - 1
    }
    else {
      low = mid + 1
    }
  }
  console.log('No Match found')
  return - 1
}


var arrr = [1,2,3,4,5,6,7,8,9,13,41,42,64]

binarySearch(arrr, 13)
