const taskForm = document.querySelector('.task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');


loadEventListeners()

function loadEventListeners() {
    taskForm.addEventListener('submit', addList);
    clearBtn.addEventListener('click', clearList);
    taskList.addEventListener('click', deleteItem);
}

function addList(e) {
    const li = document.createElement('li');

    li.className = "collection-item"

    li.appendChild(document.createTextNode(taskInput.value));

    const deleteBtn = document.createElement('a');

    deleteBtn.className = "delete-item secondary-content";
    deleteBtn.innerHTML = "<i class='fas fa-times'></i>";

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    e.preventDefault();
};

function clearList(e) {
    while (taskList.firstElementChild) {
        taskList.firstElementChild.remove()
    }

    e.preventDefault();
};

function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        e.target.parentElement.parentElement.remove();
    }
    
    e.preventDefault();
}