const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });


var numeros = [1, 2, 3, 4, 5];
console.log("Inroduzca la operacion que quiere realizar")
rl.question('suma(1), la media(2), encontrar el màximo(3) o encontrar el mínimo(4)', (opcion) => {
    if(opcion==1){
        let resultado = 0
        for(i = 0;i<numeros.length;i++){
            resultado += numeros[i];
        }
        console.log(`resultado de la suma = ${resultado} `);
    }else if (opcion ==2){
        let suma = 0
        let resultado=0
        for(i = 0;i<numeros.length;i++){
            suma += numeros[i];
        }
        resultado = suma/2
        console.log(`La media es = ${resultado} `);
        
    }else if(opcion == 3){
        mayor = 0
        for(i = 0;i<numeros.length;i++){
            if(numeros[i]>mayor){
                mayor = numeros[i]
            }
        }
        console.log(`El numero mayor es = ${mayor}`)
    }else if(opcion == 4){
       menor = numeros[0]
        for(i = 0;i<numeros.length;i++){
            if(numeros[i]<menor){
                menor = numeros[i]
            }
        }
        console.log(`El numero menor es = ${menor}`)
    }
    rl.close();

});