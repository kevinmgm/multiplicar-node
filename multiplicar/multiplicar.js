// requireds
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++){
        console.log(`${ base } * ${ i } =  ${ base * i}`);
    }
}

crearArchivo = (base) => {
    return new Promise( (resolve, reject) => {

        if (!Number(base)){
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for( let i = 1; i <= 10; i++){
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }
        
        /* const data = new Uint8Array(Buffer.from('Hello Mundo')); */
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
          if (err)
            reject(err)
          else
            resolve(`tabla-${ base }.txt`);
          console.log(`El archivo tabla-${ base }.txt ha sido creado`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
