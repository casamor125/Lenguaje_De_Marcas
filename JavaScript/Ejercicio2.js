const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Introduzca la temperatura', (temp) => {
    temperatura =temp
    rl.question('La ha introducido en Celsius(1) o en Farenheit(2) ', (tipo) => {
        // console.log(tipo)
        if (tipo == 1) {
            const resultado = (temperatura * 9 / 5) + 32;
            console.log(`La temperatura que ha introducido son ${resultado} grados farenheit`);
        } else if (tipo == 2) {
            const resultado = (temperatura - 32) * 5 / 9;
            console.log(`La temperatura que ha introducido son ${resultado} grados farenheit`);
        }
        rl.close();

    });


});