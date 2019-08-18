class UI {
    userProfile(user) {
        const profileBox = document.querySelector('.profile');
        const div = document.createElement('div');
        div.innerHTML = `<h6>${user.name}</h6>`
        
    }
}