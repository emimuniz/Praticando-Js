function changeBorder(){
    let number = document.getElementById("border").value;
    if(validacao(number)) return "";
    document.getElementById('my-box').style.borderRadius = `${number}px`
}

function validacao(number){  
    if(isNaN(number)){
        document.getElementById("error").innerHTML = '<p style="color:red; padding: 10px">Insera um numero valido</p>'
        return true;
    }
}