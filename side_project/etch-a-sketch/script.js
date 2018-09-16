const container = document.querySelector('#container');
let userInput = 4;
const gridSize = 600 / userInput;

container.style.cssText = `grid-template-columns: repeat(${userInput}, 1fr)`


for (let i =0; i < userInput*userInput; i++ ) {
  const grid = document.createElement('div');
  grid.style.width = gridSize + "px";
  grid.style.height = gridSize + "px";
  grid.classList.add('grid');
  container.appendChild(grid);

}


const grids = document.querySelectorAll(".grid")
  grids.forEach(grid) => {
    grid.addEventListener('mouseover', color)
  }

function color() {
  this.classList.add('colored')
}
