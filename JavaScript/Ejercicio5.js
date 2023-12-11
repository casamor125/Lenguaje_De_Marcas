
//set interval(la funcion que tira numeros random, el intervalo(500 por ejemplo))
setInterval(Random, (750))
   
function Random (){

    var numeroMaximo = 100;
    var numeroAleatorio = Math.random() * numeroMaximo;
    if(numeroAleatorio>75){
        console.log(numeroAleatorio,"Alerta el sensor se esta sobrecalentando")
    }else{
    console.log(numeroAleatorio);
    }
    
}