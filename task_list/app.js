const addForm = document.querySelector('.task-form');
const addInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearItemBtn = document.querySelector('.clear-task');

loadEventListener();

function loadEventListener() {
    addForm.addEventListener('submit', addList);
    clearItemBtn.addEventListener('click', clearItem);
    taskList.addEventListener('click', deleteItem);
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

function clearItem(e) { 
    console.log(e.target.parentElement);
    while(taskList.firstChild ) {
        taskList.removeChild(taskList.firstChild);
    }
    
    e.preventDefault();
}


function deleteItem(e) {
    if (e.target.className === "fas fa-times") {
        e.target.parentElement.parentElement.remove()
    }
    
}