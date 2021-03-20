const p = document.querySelector('.texto');
const button = document.querySelector('button')
const message = document.querySelector('#message');
const error = document.querySelector('.error')

const handleClick = () => {
    if (message.value === ''){
            error.classList.add('show')
        setTimeout(function(){
            error.classList.remove('show')
        }, 2000)
    } else {
        p.textContent = message.value.toUpperCase();
        message.value = ''
    }
}

button.addEventListener('click', handleClick);