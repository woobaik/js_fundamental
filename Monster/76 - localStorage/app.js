const btn = document.querySelector('button');
const area = document.querySelector('.numberArea')
localStorage.clear()
btn.addEventListener('click', function () {
    if (localStorage.getItem('num')) {
        let cnt = Number(localStorage.getItem('num'))
        cnt += 1
        localStorage.setItem('num', cnt)
    } else {
        localStorage.setItem('num', 0)
    }
    const num = localStorage.getItem('num')
    area.innerText = num

})







