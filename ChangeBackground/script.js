const button = document.querySelector('button')

const colores = ["#6A5ACD", "#00FA9A", "#A0522D", "#4B0082"]

const handleClick = () => {
    let random = Math.floor(Math.random() * colores.length);
    document.querySelector('body').style.backgroundColor = colores[random];
}

button.addEventListener('click', handleClick);