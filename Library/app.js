class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

class UI {
    addBookToList(book) {
        const tr = document.createElement('tr')
        const trBody = document.querySelector('.book-table')
        tr.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td class="delete">X</td>
        `
        trBody.appendChild(tr)
    }

    showAlert(book, message) {
        const div = document.createElement('div');
        const msg = document.createTextNode(message)
        const container = document.querySelector('.container')
        div.className = 'alert row'
        div.appendChild(msg)
        container.insertBefore(div, form)

        setTimeout(function() {
            div.remove()
        },3000)
    }

    deleteBook() {

    }

    clearField() {
        title.value = ''
        author.value = ''
        isbn.value = ''
    }

}

const form = document.querySelector('form')
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const isbn = document.querySelector('#isbn');
const listBoard = document.querySelector('.book-table')


form.addEventListener('submit', function(e){
    const book = new Book(title.value, author.value, isbn.value)
    const ui = new UI
    if (!book.title || !book.author || !book.isbn) {
         ui.showAlert(book,'Please fill out the form')
         book.title ? title.style.borderColor = 'black' : title.style.borderColor = 'red'
         book.author ? author.style.borderColor = 'black' : author.style.borderColor = 'red'
         book.isbn ? isbn.style.borderColor = 'black' : isbn.style.borderColor = 'red'
    } else {
        ui.addBookToList(book);    
        ui.clearField()
    }
    
    e.preventDefault()
})


listBoard.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }   
})