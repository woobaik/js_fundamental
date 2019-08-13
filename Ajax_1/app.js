const customerBtn = document.querySelector('#customer-btn');
const customersBtn = document.querySelector('#customers-btn');


customerBtn.addEventListener('click', function() {
    
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'customer.json', true)

    xhr.onload = function() {
        if( this.status == 200) {
            console.log(this.responseText)
            const container = document.querySelector('.container')
            const customer = JSON.parse(this.responseText)
            const customersList = document.querySelector('.customers-list')
            const div = document.createElement('div')
            div.innerHTML = `
                id : ${customer.id}, <br>
                name: ${customer.name}, <br>
                address: ${customer.address}
            `
            container.insertBefore(div, customersList)
            console.log(customersList)
        }
    }

    xhr.send()    
})

