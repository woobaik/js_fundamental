const container = document.querySelector('.container');
const inputField = document.querySelector('input')
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    if (inputField.value !== '') {

        const li = document.createElement('li')
        const textNode = document.createTextNode(inputField.value);
        li.appendChild(textNode)
        li.addEventListener('click', function (e) {
            const span = document.createElement('span')
            const text = document.createTextNode(' X ')
            span.addEventListener('click', function () {
                this.parentElement.remove()
            })
            if (li.classList.contains('red')) {
                li.classList.toggle('red')
                li.style.color = 'black'
                li.style.textDecoration = 'none'




            } else {
                span.appendChild(text)
                li.appendChild(span)
                li.style.textDecoration = 'line-through'
                li.style.color = 'red'
                li.classList.toggle('red')
            }
        })
        container.appendChild(li)

    } else {
        alert('Please Enter list value ')
    }

})




