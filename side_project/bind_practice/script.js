var result = 100;

var myObj = {
  result: 1,
  myFnc1: function() {
    this.result += 1;
    console.log('This is from myFnc1 :' + this.result)

    myFnc2 = function() {
      this.result += 1;
      console.log('This is from myFnc2 :' + this.result)

      myFnc3 = function() {
        this.result += 1;
        console.log('This is from myFnc3 :' + this.result )
      }
      myFnc3()
    }
    myFnc2()
  }
}

myObj.myFnc1()
