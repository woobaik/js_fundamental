var result = 100


// ===THIS OBJ WILL RETURN RESULT OF 2, 101, 102
// var myObj = {
//   result: 1,
//   myFnc1: function() {
//     this.result += 1;
//     console.log('This is from myFnc1 :' + this.result)
//
//     function fnc2() {
//       this.result += 1
//       console.log('This is from myFnc2 :' + this.result)
//
//       function fnc3() {
//         this.result += 1
//         console.log('This is from myFnc3 :' + this.result)
//       }
//       fnc3()
//     }
//     fnc2()
//   }
// }
//
// myObj.myFnc1()


// THIS OBJ WILL RETURN WHAT WE EXPECTED (1,2,3)
var result = 100;
var myObj = {
  result: 1,
  myfnc1: function() {
    var that = this
    that.result += 1
    console.log("This is from fnc1 " + that.result)

    function fnc2() {
      that.result += 1
      console.log("This is from fnc2 " + that.result)

      function fnc3(){
        that.result += 1
        console.log("This is from fnc3 " + that.result)
      }
      fnc3()
    }
    fnc2()
  }
}

myObj.myfnc1()
