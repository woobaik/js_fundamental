const taskForm = document.querySelector('.task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filterQuery = document.querySelector('#filter');


loadEventListeners()

function loadEventListeners() {
    taskForm.addEventListener('submit', addList);
    clearBtn.addEventListener('click', clearList);
    taskList.addEventListener('click', deleteItem);
    filterQuery.addEventListener('keyup', todoFilter);
}

function addList(e) {
    const li = document.createElement('li');

    li.className = "collection-item"

    li.appendChild(document.createTextNode(taskInput.value));

    const deleteBtn = document.createElement('a');

    deleteBtn.className = "delete-item secondary-content";
    deleteBtn.innerHTML = "<i class='fas fa-times'></i>";

    li.appendChild(deleteBtn);

    taskList.insertBefore(li, taskList[0])
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
        if (confirm('Are you sure?')) {
        e.target.parentElement.parentElement.remove();
        }
    }
    
    e.preventDefault();
};

function todoFilter(e) {
    const text = document.querySelector('#filter').value;
    console.log(text)

    Array.from(taskList.children).forEach( task => {
        if (task.textContent.indexOf(text) === -1 ) {
            task.style.display = 'none'
        } else {
            task.style.display = 'block'
        }
    })
}

