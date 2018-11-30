const btn =  document.querySelector('.get-jokes');
const jokes = document.querySelector('.jokes');
btn.addEventListener('click', genJoke)

function genJoke(e) {
  const numInput = document.querySelector('input[type="number"]');
  let num = numInput.value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${num}
`,true)

  xhr.onload = function() {
    let text = '';
    let response = JSON.parse(this.responseText);
    if (this.status === 200) {
      if (response.type === 'success') {
        response.value.forEach(function(joke) {
          text += `<li>${joke.joke}</li>`
          jokes.innerHTML = text;

        })
      }
    } else {
      //error msg
    }
  }

  xhr.send();
  e.preventDefault();


}
