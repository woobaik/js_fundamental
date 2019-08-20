const arr = ["apple","pear","shoes","song","speaker","coffee", "chicken"];
const body = document.querySelector('body')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    const div = document.createElement('div');
    const textNode = document.createTextNode(arr[randomIndex(arr)])
    div.appendChild(textNode);
    body.appendChild(div)
})



function randomIndex(arr) {
    return Math.floor(Math.random() * arr.length)
}



