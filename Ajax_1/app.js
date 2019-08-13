const customerBtn = document.querySelector('#customer-btn');
const customersBtn = document.querySelector('#customers-btn');
let requested = false

customerBtn.addEventListener('click', function() {
    if (requested === false) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', 'customer.json', true)

        xhr.onload = function () {
            if (this.status == 200) {
                
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

            }
        }
        requested = true;
        xhr.send()    
    } 
    
})

customersBtn.addEventListener('click', function() {

    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'customers.json', true)

    xhr.onload = function() {
        if (this.status === 200) {
            
            const customersArea = document.querySelector('.customers-list')
            let customersList = ''
            const customers = JSON.parse(this.responseText)
            customers.forEach(function(customer) {
                customersList += `
                    <ul>
                        <li>${customer.id}</li>
                        <li>${customer.name}</li>
                        <li>${customer.address}</li>
                    </ul>
                `
            })
            customersArea.innerHTML =customersList
            
        }

    }

    xhr.send()
})