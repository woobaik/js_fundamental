var budgetController = (function() {

  var x = 23;

  var add = function(a) {
    return x + a ;
  }

  return {
    publicTest: function(b) {
      return add(b);
    }
  }
})();


var uiController = (function() {
  // some code;
})();

var controller = (function(budgetCtrl, uiCtrl) {

  var z = budgetController.publicTest(4);

  return {
    anotherPublicController: function() {
      console.log(z);
    }
  }
})(budgetController, uiController)
