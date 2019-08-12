const submitBtn = document.querySelector('.submit-btn');
const textInput = document.querySelector('.text-input');
const listArea = document.querySelector('.todo-list');
const deleteBtn = document.querySelector('.delete-btn');
console.log(deleteBtn)

eventLoader()

function eventLoader() {
    submitBtn.addEventListener('click', addList);
    listArea.addEventListener('click', deleteList)
}


    


function addList() {
    if (textInput.value === '') {
        alert("You Can't Add Blank Task")
    } else {
        const li = document.createElement('li')
        const textValue = document.createTextNode(textInput.value)
        const linkTag = document.createElement('a')
        linkTag.className = 'delete-item secondary-content'
        linkTag.innerHTML = '<i class="fas fa-times delete-btn"></i>'  
        li.className = 'collection-item'
        li.appendChild(textValue);
        li.appendChild(linkTag)

        listArea.appendChild(li)


        //store in LS
        storeTaskInLocalStorage(textInput.value);
        textInput.value = ''
        
    }
}

// Store Task

function storeTaskInLocalStorage(input) {
    let tasks;

    if (localStorage.getItem(tasks)) {
        console.log(tasks)
    } else {
        tasks = []
        localStorage.setItem('tasks', tasks)
        console.log(localStorage.getItem('tasks'))
    }
}

function deleteList(e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.parentElement.style.display = 'none'
    }
}