// variables contantes

const nombre = 'Cristian';
const apellido = 'Tovar';

let valorDado = 5;


const nombre_completo = `Mi nombre ${nombre} Mi apellido ${apellido}`;

console.log(nombre_completo)


function getSaludo(nombre){
    return 'Hola mundo ' + nombre;
}

console.log(`texto: ${getSaludo(nombre)}`)