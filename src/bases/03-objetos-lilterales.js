// variables contantes
const persona = {
    nombre:'Tony',
    apellido:'Stark',
    edad: 45,
    dirrecion: {
        barrio: 'la violeta',
        lat: 2441414131
    }
}

const perosna2 = {...persona}
perosna2.nombre = 'Crisitna'


console.log(persona)
console.log(perosna2)