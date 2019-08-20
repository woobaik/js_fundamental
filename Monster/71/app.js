const body = document.querySelector('body')
const btn = document.querySelector('button')


btn.addEventListener('click', () => {
    body.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`
})


function random() {
    return Math.floor(Math.random() * 256)
}
