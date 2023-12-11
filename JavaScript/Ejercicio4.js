const fs = require('node:fs');
const nombre = 'fichero.txt';

// Lee el contenido del archivo de forma asíncrona
fs.readFile(nombre, 'utf8', (error, data) => {
    if (error) {
        console.error('Error al leer el archivo:', error);
        return;
    }
    console.log('Contenido del archivo:', data);
});
