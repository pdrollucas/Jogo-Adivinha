function sorteia(){
    return Math.round(Math.random() * 10)
}

function sorteiaNumeros(quantidade){

    var numeroPensados = [];
    var numero = 1;

    while(numero <= quantidade){

        var numeroAleatorio = sorteia();

        if(numeroAleatorio !== 0){
            var achou = false;
            
            for(var posicao = 0; posicao < numeroPensados.length; posicao++){
                if(numeroPensados[posicao] == numeroAleatorio){
                    achou = true;
                    break;
                }
            }

            if(achou == false){
                numeroPensados.push(numeroAleatorio);
                numero++;
            }
        }
    }
    return numeroPensados;
}

var numeroPensados = sorteiaNumeros(3);

console.log(numeroPensados);

var input = document.querySelector("input");
input.focus();

function adivinha(){
    var achou = false;

    for(var posicao = 0; posicao < numeroPensados.length; posicao++){

        if(input.value == numeroPensados[posicao]){
            alert("Você acertou! os números pensados eram " + numeroPensados);
            achou = true;
            break;
        } 
        
    }

    if(achou == false){
        alert("Você errou! Tente novamente");
    }

    input.value = "";
    input.focus();
   }

var button = document.querySelector("button");
button.onclick = adivinha;