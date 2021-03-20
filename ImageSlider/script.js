    const button = document.querySelectorAll('button')
    const image = document.querySelector('.image');

    const pictures = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
    ]

    let contador = 0;
    const handleClick = (e) => {
        if (e.target.classList.contains('left')){
            contador--;
            if(contador < 0){
              contador = pictures.length -1
            }
            image.style.backgroundImage = `url('../assets/${pictures[contador]}')`
          }
          if (e.target.classList.contains('right')){
            contador++;
            if(contador > pictures.length -1){
              contador = 0
            }
            image.style.backgroundImage = `url('../assets/${pictures[contador]}')`
        }
    }

    button.forEach((item) => {
        item.addEventListener('click', handleClick)
    })