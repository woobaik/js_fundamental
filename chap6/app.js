var budgetController = (function() {
  // some code

  var inputData = {

  }
})();

var uiController = (function() {
  //some code here

  var DomStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn'

  }


  return {
    getInput: function() {
      return {
       type: document.querySelector(DomStrings.inputType).value,
       description: document.querySelector(DomStrings.inputDescription).value,
       value: document.querySelector(DomStrings.inputValue).value
     };
   },

    getDomStrings: function() {
     return DomStrings;
    }
  };

})();

var controller = (function(budgetCtrl, uiCtrl) {

  var setupEventListners = function() {
    var DOM = uiCtrl.getDomStrings();

    document.querySelector(DOM.inputButton).addEventListener('click',ctrlAddItem);

    document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  }

  var ctrlAddItem = function() {

    // 1. get the filled input data
      var input = uiCtrl.getInput();
      console.log(input)
    // 2. add the item to the budget controller

    // 3. add new item to the UI

    // 4. calculate the budget.

    // 5. display the budget on the UI
  }

  return {
    init: function() {
      console.log("starting the app");
      setupEventListners();
    }
  };

})(budgetController, uiController);


controller.init();
