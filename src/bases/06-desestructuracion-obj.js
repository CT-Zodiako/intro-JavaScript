//desestructuracion
//asignacion desestructurante
const persona ={
    nombre: 'TOny',
    edad: 43,
    clave:'iroman',
    rango:'soldado'
}

const {nombre,clave} = persona;

console.log(nombre , clave)



const  useContext = ({edad,nombre,clave, rango='capitan'})=>{
    // console.log(nombre,clave, rango)
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:123123,
            lng: 123123
        }
    }
}

const {nombreClave,anios,latlng:{lat,lng} } = useContext(persona)

console.log(nombreClave,anios,lat,lng)