function getNumber(){
    document.getElementById("teste").innerHTML = "";
    let number = document.getElementById('number').value;
    let splitNumber = number.split("");
    const binarios = [128, 64, 32, 16, 8, 4, 2, 1];
    let soma = 0, indice = 0;

    if(validacao(number)) return "";

    for(var i = 0; i < splitNumber.length; i++){
        if(splitNumber[i] == 1){
            soma += binarios[indice]     
        }
        indice++;
    }

    document.getElementById('number').value = soma;
}

function validacao(number){  
    var er = /[^0-1]/;
    if(er.test(number)){
        document.getElementById("teste").innerHTML = '<p style="color:red; padding: 10px">Insera um numero valido</p>'
        return true;
    }
}

