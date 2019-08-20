const lists = document.querySelectorAll('li');
console.log(lists)
lists.forEach(function (list) {
    list.addEventListener('mouseenter', function () {
        list.style.color = 'red';

    })

    list.addEventListener('mouseleave', function () {
        list.style.color = 'black';
    })
})