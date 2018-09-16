const container = document.querySelector('#container');

let userInput = 16



for (let i =0; i < userInput; i++ ) {
  const div = document.createElement('div');
  div.classList.add('grid');
  container.appendChild(div);

}
