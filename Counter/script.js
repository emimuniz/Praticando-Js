const lower = document.querySelector('#lower');
const add = document.querySelector('#add');
const count = document.querySelector('p');
let contador = 0;


const color = () => {
    if(contador > 0){
        count.style.color = 'green';
    }
    if(contador < 0){
        count.style.color = 'red';
    
    }

    if(contador == 0){
        count.style.color = 'black';
    }
}


const handleClickLower = () => {
    contador-=1;
    count.textContent = contador;
    color();
}

const handleClickAdd = () => {
    contador+=1;
    count.textContent = contador;
    color();
}


lower.addEventListener('click', handleClickLower)
add.addEventListener('click', handleClickAdd)

