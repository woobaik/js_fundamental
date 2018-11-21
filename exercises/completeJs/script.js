
/*1.build a function constructor called Question to describe a question.
   A question should include:
  a. question itself
  b. the answers from which the player can choose the correct one - Find an adequate data structor
  c. correct answer


  2. Create a couple of questions using the constructor

  3. store them all inside an array

  4. Select on random question and log it on the console, together with the possible answers(number),
  Hint>)) write a method for the question objects for this task.
*/

(function() {
  function QuestionConstructor(question, options, corrctAnswer) {
    this.question = question;
    this.options = options;
    this.corrctAnswer = corrctAnswer
  }

  QuestionConstructor.prototype.displayQuestion = function() {
    window.alert(this.question)
  }

  QuestionConstructor.prototype.showingSelection = function() {
    for (var i = 0; i < this.options.length; i++) {
      console.log(i + ' : ' + this.options[i])
    }
  }

  QuestionConstructor.prototype.getSelection = function() {
    var answer = parseInt(window.prompt(this.question))
    if (answer === this.corrctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log('wrong')
    }
  }

  var q1 = new QuestionConstructor(
    'Is programming fun?',
    ['Yes', 'No'],
    0
  )

  var q2 = new QuestionConstructor(
    'What is instructor\'s favorite programming language?',
    ['Ruby', 'JS', 'Python', 'PHP'],
    0
  )

  var q3 = new QuestionConstructor(
    'When is thanks giving day?',
    ['11/3', '11/23', '12/24', '7/11'],
    1
  )

  var questingSet = [q1, q2, q3];
  var randomNum = Math.floor(Math.random( ) * questingSet.length)

  questingSet[randomNum].showingSelection();
  questingSet[randomNum].getSelection();

})()
