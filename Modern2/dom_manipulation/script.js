// Dom - document Object Model


//querySelector just select first element.
// const p = document.querySelector('p')
// p.remove()

const ps = document.querySelectorAll('p')

// ps.forEach((x, i) => x.textContent = `Number of <p> : ${i} ${x.innerText} `)

ps.forEach((x) => {
  if(x.textContent.includes('This')) {
    console.log('haha');
    x.remove();
  }
})
