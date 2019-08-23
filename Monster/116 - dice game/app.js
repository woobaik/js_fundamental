const result = document.querySelector('#output')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const btn = document.querySelector('.btn')
btn.addEventListener('click', roll)

function roll() {
    let number1 = generateNumber(6)
    let number2 = generateNumber(6)
    const div = document.createElement('div')
    if (number1 === number2) {  
        div.innerText = 'We Draw!'
    } else if(number1 > number2) {
        div.innerText = 'You Win!'
    } else {
        div.innerText = 'You Lost!'
    }
    if (result.children[0]) {
        result.children[0].remove()
    }
    player1.innerText = number1;
    player2.innerText = number2;
    console.log(player1)
    console.log(player2)
    result.appendChild(div)
}

function generateNumber(number) {
    return Math.floor(Math.random() * 6 + 1)
}