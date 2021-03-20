const button = document.querySelector('button');
const span = document.querySelector('span');

const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

const handleClick = () => {
    let hex = '#'

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexValues.length);
        hex += hexValues[random]; 
    }

    span.innerText = `${hex}`
    document.querySelector('body').style.backgroundColor = hex;
}
button.addEventListener('click', handleClick);
