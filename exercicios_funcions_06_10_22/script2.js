//García Mirás, María del Pilar

/*Crea unha función á que se lle pase un array e devolva como resultado un array cos
elementos impares do array de entrada.*/

const list = [];
let num;

function imparesArrai(list) {
    let nueva_longitud = [];

    for (elemento in list){
            nueva_longitud = list.filter((elemento) => elemento %2 != 0);  
    } return nueva_longitud;
}



const listEntrada = [10, 3, 6, 7, 8, 9];
console.log(imparesArrai(listEntrada));
