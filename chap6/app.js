var budgetController = (function() {
  // some code

  var inputData = {

  }
})();

var uiController = (function() {
  //some code here
  return {
    getInput: function() {
      return {
       type: document.querySelector('.add__type').value,
       description: document.querySelector('.add__description').value,
       value: document.querySelector('.add__value').value
     };

    }
  };

})();

var controller = (function(budgetCtrl, uiCtrl) {

  var ctrlAddItem = function() {
    console.log("it works")
    // 1. get the filled input data
      var input = uiCtrl.getInput();
      console.log(input)
    // 2. add the item to the budget controller

    // 3. add new item to the UI

    // 4. calculate the budget.

    // 5. display the budget on the UI
  }

  document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);

  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    };
  });


})(budgetController, uiController);
