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

        textInput.value = ''
        console.log(deleteBtn)
    }
}

function deleteList(e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.parentElement.style.display = 'none'
    }
}