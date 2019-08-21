const container = document.querySelector('.container');

let y = 10 
const inTimer = window.setInterval(counter, 1000)

function counter() {
    console.log(y)
    y -= 1
    if (y < 0) {
        clearInterval(inTimer)
    }
}






