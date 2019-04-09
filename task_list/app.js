//Define UI selector
const addForm = document.querySelector('.task-form');
const addInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');

loadAddEventListeners();

function loadAddEventListeners() {
    addForm.addEventListener('submit', addTask)
}

function addTask(e) {
    if (addInput.value === '') {
        alert('Add new Task Please');
    }

    const li = document.createElement('li');
    li.className = 'collection-item';
    
    li.appendChild(document.createTextNode(addInput.value));

    const deleteLink = document.createElement('a');
    deleteLink.className = 'delete-item secondary-content';
    deleteLink.innerHTML = "<i class='fas fa-times'></i>"
    li.appendChild(deleteLink);

    taskList.appendChild(li)
    
    addInput.value = ''
    e.preventDefault();
}