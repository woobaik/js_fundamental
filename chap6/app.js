var budgetController = (function() {
  // some code
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
        allItems: {
          exp: [],
          inc: []
        },
        totals: {
          exp: 0,
          inc: 0
        }
  }

  return {
    addItem: function(type, des, val) {
      var newItem;

      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0
      }

      if (type === "exp") {
        newItem =  new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem =  new Income(ID, des, val);
      }

      data.allItems[type].push(newItem);
      return newItem;

    },
    testing: function() {
      console.log(data);
    }
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
    var input, newItem;
    // 1. get the filled input data
      input = uiCtrl.getInput();
      console.log(input)
    // 2. add the item to the budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);
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
