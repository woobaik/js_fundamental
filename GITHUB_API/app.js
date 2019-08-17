
const github = new Github()

const input = document.querySelector('.input-field');


input.addEventListener('keyup', function(e) {
    const userText = e.target.value;

    if (userText !== '') {
        github.getUser(userText).then(data => {
            console.log(data.jsonProfile.message)
        })

    }

})