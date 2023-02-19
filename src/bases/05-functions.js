
//funciones


const saludar = function(nombre){
    return `Hola, ${nombre}`
}

const saludar2 = (nombre)=>{
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre)=>`Hola, ${nombre}`;


console.log(saludar3('goku'));



const getUser = () => ({
        uid: 'ABC123',
        user: 'El_mojado'
})


console.log((getUser))





function getUserActive (nombre){
    return{
        uid: 'ABasdC123',
        user: 'El_mojado'
    }
}


const userActivo = getUserActive('Cristian')

console.log(userActivo)

const  getUserActive2 = (nombre)=>({
        uid: 'ABaasdasdsdC123',
        user: nombre
})


const userActivo2 = getUserActive2('Cristian')

console.log(userActivo2)