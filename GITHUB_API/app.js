
const github = new Github();
const ui = new UI();
const input = document.querySelector('.input-field');


input.addEventListener('keyup', function(e) {
    const userText = e.target.value;

    if (userText !== '') {
        github.getUser(userText).then(data => {
            if (data.jsonProfile.message === 'Not Found') {
                console.log('there is no such a user')
                //show an alert box
            } else {
                console.log(data.jsonProfile)
                ui.userProfile(data.jsonProfile)
            }
        })

    }

})