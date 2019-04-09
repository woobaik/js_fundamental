const addForm = document.querySelector('.task-form');
const addInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');

loadEventListener();

function loadEventListener() {
    addForm.addEventListener('submit', addList);
    
}

function addList(e) {
    if (!(addInput.value)) {
        alert('Please Add New Task');
    };


    const li = document.createElement('li');

    li.className = 'collection-item';

    li.appendChild(document.createTextNode(addInput.value));
    
    const deleteLink = document.createElement('a');
    deleteLink.className = 'delete-item secondary-content';
    deleteLink.innerHTML = "<i class='fas fa-times'></i>";

    li.appendChild(deleteLink);

    taskList.appendChild(li);

    addInput.value = ''

    e.preventDefault()
}

