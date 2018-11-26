// let val;
//
//
// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.charset;
// val = document.contentType;
//
// val = document.forms;
// val = document.forms[1];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
//
// val = document.links;
// val = document.links[0].className;
// val = document.links[0].classList;
//
// val = document.images;
// val = document.scripts;
// val = document.scripts[0].getAttribute('src')
//
// // Array.from(val) => can be accessed with array function.
//
//

// console.log(val);

//
// console.log(document.getElementById('task-title'));
//
//
// //get things from the element
//
// console.log(document.getElementById('task-title').id)
//
// //change styling
// console.log(document.getElementById('task-title').style.background = "#333");
// console.log(document.getElementById('task-title').style.color = "#fff");
// console.log(document.getElementById('task-title').style.padding = "10px 10px");
// // console.log(document.getElementById('task-title').style.display = "none");
//
//
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'Tasssk List';
// document.getElementById('task-title').innerHTML = '<span style="color:red"> Task List</span>'



// document.querySelector()

// console.log(document.querySelector('#'));

// 2+2+1+1+2+4+1+1+2.3+1+2.3+8+16
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
//

const li = document.createElement('li')

li.className = 'collection-item';
li.id = 'new-item';
li.setAttribute('title','New-item');


//create text node and append;

li.appendChild(document.createTextNode('hello world'));

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>'

li.appendChild(link);

document.querySelector('ul.collection').appendChild(li);
console.log(li);
