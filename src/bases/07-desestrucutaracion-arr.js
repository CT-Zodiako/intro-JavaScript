const personajes = ['goku','vegeta','trunks']

const [,,goku] = personajes

console.log(goku)



const retornaArreglo = ()=>{
    return['ABC',123]
}



const [a,b] = retornaArreglo()

console.log(a)



const useState = (valor) =>{
    return [valor, ()=>{console.log("HOla mundo")}]
}

const [nombre, setNombre] = useState('Goku')


console.log(nombre)
setNombre()