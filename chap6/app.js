var budgetController = (function() {

  var x = 25;

  var add = function(a) {
    return a + x
  }

  return {
    publicTest: function(b) {
      return add(b);
    }
  }
})();

var uiController = (function() {
  //some code here


})();

var controller = (function(budgetCtrl, uiCtrl) {

  var z = budgetCtrl.publicTest(4);

  return {
    anotherPublic: function() {
      console.log(z)
    }
  }

})(budgetController, uiController);
