const taskForm = document.querySelector('.task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');

loadEventListeners()

function loadEventListeners() {
    taskForm.addEventListener('submit', addList);
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
}