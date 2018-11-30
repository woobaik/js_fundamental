// // Dom - document Object Model
//
//
// //querySelector just select first element.
// // const p = document.querySelector('p')
// // p.remove()
//
// // const ps = document.querySelectorAll('p')
// //
// // ps.forEach((x, i) => x.textContent = `Number of <p> : ${i} ${x.innerText} `)
// //
// // ps.forEach((x) => {
// //   if(x.textContent.includes('This')) {
// //     console.log('haha');
// //     x.remove();
// //   }
// // })
//
//
// const todo = [{
//   text: 'Order cat food',
//   completed: true
// }, {
//   text: 'Watch a movie',
//   completed: false
// }, {
//   text: 'Buy an original sound track',
//   completed: false
// }, {
//   text: 'Finish javascript',
//   completed: true
// }, {
//   text: "Finish Cooking",
//   completed: false
// }
// ]
//
// let incompleted = 0;
// const body = document.querySelector('body');
// const tasks = document.querySelector('.tasks');
// const remaining = document.querySelector('.remaining')
// const searchResult = document.querySelector('.search-result')
// const inputBox = document.querySelector('.input-box')
// const form = document.querySelector('#add-form')
// const checkBox = document.querySelector('#check-form')
//
// const render = () => {
//   todo.forEach((task) => {
//     if(task.completed === false) {
//       incompleted += 1
//     }
//     let list = document.createElement('p');
//     list.innerText = task.text;
//     // tasks.appendChild(list);
//   })
// }
//
// render()
//
//
//
// const counter = document.createElement('p');
// counter.innerText = `You have ${incompleted} tasks left`;
// remaining.appendChild(counter);
//
//
// const filter = {
//   searchText: ''
//
// }
//
// const renderNotes = (data, filter) => {
//   const filteredData = data.filter((task) => {
//     return task.text.toLowerCase().includes(filter.searchText.toLowerCase())
//   })
//
//   searchResult.innerText = ''
//   filteredData.forEach((fd) => {
//     const p = document.createElement('p');
//     p.innerText = fd.text;
//     searchResult.appendChild(p);
//   })
// }
//
//
// renderNotes(todo, filter)
//
// inputBox.addEventListener('input', (e) => {
//   filter.searchText = e.target.value;
//   renderNotes(todo, filter)
// })
//
// //
// // form.addEventListener('submit', (e) => {
// //   e.preventDefault()
// //   const newTask = {
// //                   text: e.target.elements['name-box'].value,
// //                   completed: false
// //                 }
// //   todo.push(newTask)
// //   tasks.innerText =''
// //   render()
// // })



let movie = {
  bohemian : 'rapsody',
  joble : 'joble pay',
  zoco : 'Park Kwangwoo'
}
let movieJson = JSON.stringify(movie)
localStorage.setItem('movie', movieJson);

movieParse = JSON.parse(localStorage.getItem('movie'));

console.log(`${movieParse.bohemian} is better than #{movieParse.joble}`)
