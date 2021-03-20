import { quoteStatements} from './quotes.js'
const button = document.querySelector('button');
const blockquote = document.querySelector('blockquote h3');
const p = document.querySelector('p');

const handleClick = () => {
    let random = Math.floor(Math.random() * quoteStatements.length)
    blockquote.innerHTML = quoteStatements[random].statement
    p.innerHTML = quoteStatements[random].author
}

button.addEventListener('click', handleClick)

