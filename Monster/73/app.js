const container = document.querySelector('.container');
const keyCode = [37,38,39,40,87,65,83,68 ]

document.addEventListener('DOMContentLoaded', function() {

    const div = document.createElement('div');
    div.style.backgroundColor = 'pink'
    div.style.width = '200px'
    div.style.height = '200px'
    div.style.left = '500px'
    div.style.top = '100px'
    div.style.position = 'absolute'
    container.appendChild(div)

    document.addEventListener('keydown', function(e) {
        if (keyCode.includes(Number(e.keyCode))) {
            
            switch (e.keyCode) {
                case 87:
                case 38: 
                    top()
                    break;
                case 65:
                case 37:
                    left()
                    break;    
                case 83:
                case 40: 
                    down()
                    break;

                case 39:
                case 68: 
                    right()
                    break;
                default:
                    break;
            }
        }

        
    })

    function top() {
        let temp = (Number(div.style.top.replace('px', '')))
        div.style.top = (temp - 1) + 'px' 
    }

    function left() {
        let temp = (Number(div.style.left.replace('px','')))
        div.style.left = ( temp - 1 ) + 'px'
    }

    function down() {
        let temp = (Number(div.style.top.replace('px', '')))
        div.style.top = (temp + 1 ) + 'px'
    }

    function right() {
        let temp = (Number(div.style.left.replace('px', '')))
        div.style.left = (temp + 1) + 'px'
    }

})