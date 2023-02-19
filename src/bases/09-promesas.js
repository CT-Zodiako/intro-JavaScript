//Promesas
import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise( (resvole,reject) =>{
//     setTimeout(() => {
//         const herore = getHeroeById(2);
//         resvole(herore)
//         // reject('Heroe no encontrado')
//     }, 2000);
// });

// promesa.then( (heroe)=>{
//     console.log('heroe', heroe)
// })
// .catch(err=> console.warn(err));


const gerHeroeByIdAsync = (id) => {
    return new Promise( (resvole,reject) =>{
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe){
                resvole(heroe)
            }
            else{
                reject('Heroe no encontrado')
            }
        }, 2000);
    });
    
};


gerHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);